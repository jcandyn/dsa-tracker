import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProblemStore } from "@/store/problemStore";
import { useSettingsStore } from "@/store/settingsStore";

import FilterBar from "./FilterBar";
import ProblemRow from "./ProblemRow";

const ProblemTable = () => {
  const problems = useProblemStore((state) => state.problems);
  const compactTable = useSettingsStore((state) => state.compactTable);
  const [searchParams] = useSearchParams();
  const [courseSet, setCourseSet] = useState("all");
  const [sort, setSort] = useState<"title" | "difficulty-asc" | "difficulty-desc">("title");
  const [page, setPage] = useState(1);
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const filteredProblems = useMemo(
    () => problems.filter((problem) => {
      const matchesCourse = courseSet === "all" || problem.topic.id === courseSet;
      const searchable = [problem.title, problem.topic.label, problem.difficulty, ...problem.tags].join(" ").toLowerCase();
      return matchesCourse && (!query || searchable.includes(query));
    }),
    [courseSet, problems, query],
  );
  const sortedProblems = useMemo(() => {
    const difficultyRank = { Easy: 1, Medium: 2, Hard: 3 } as const;
    return [...filteredProblems].sort((left, right) => {
      if (sort === "title") return left.title.localeCompare(right.title);
      const difference = difficultyRank[left.difficulty] - difficultyRank[right.difficulty];
      return sort === "difficulty-asc" ? difference : -difference;
    });
  }, [filteredProblems, sort]);
  const pageSize = 12;
  const pageCount = Math.max(1, Math.ceil(sortedProblems.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const pageProblems = sortedProblems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3"><FilterBar value={courseSet} onChange={(value) => { setCourseSet(value); setPage(1); }} /><label className="flex items-center gap-2 text-sm text-slate-300">Sort<select value={sort} onChange={(event) => { setSort(event.target.value as typeof sort); setPage(1); }} className="rounded-lg border border-slate-700 bg-slate-900 py-2 pl-3 pr-10 text-white"><option value="title">Title</option><option value="difficulty-asc">Difficulty: Easy first</option><option value="difficulty-desc">Difficulty: Hard first</option></select></label></div>

      {query && <p className="text-sm text-slate-400">Showing {filteredProblems.length} result{filteredProblems.length === 1 ? "" : "s"} for “{query}”.</p>}

      <div className="overflow-hidden rounded-xl border border-slate-800">
        <table className={`w-full ${compactTable ? "compact-problem-table" : ""}`}>
        <thead className="bg-slate-900">
          <tr>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Problem</th>
            <th className="p-4 text-left">Difficulty</th>
            <th className="p-4 text-left">Topic</th>
            <th className="p-4 text-left">Confidence</th>
          </tr>
        </thead>

          <tbody>
          {pageProblems.map((problem) => (
            <ProblemRow
              key={problem.id}
              problem={problem}
            />
          ))}
          </tbody>
        </table>
      </div>

      {sortedProblems.length > pageSize && <div className="flex items-center justify-between text-sm"><span className="text-slate-400">Page {currentPage} of {pageCount}</span><div className="flex gap-2"><button type="button" disabled={currentPage === 1} onClick={() => setPage((value) => Math.max(1, value - 1))} className="rounded-lg border border-slate-700 px-3 py-2 disabled:opacity-40">Previous</button><button type="button" disabled={currentPage === pageCount} onClick={() => setPage((value) => Math.min(pageCount, value + 1))} className="rounded-lg border border-slate-700 px-3 py-2 disabled:opacity-40">Next</button></div></div>}

      {filteredProblems.length === 0 && (
        <p className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
          No problems match this type.
        </p>
      )}
    </div>
  );
};

export default ProblemTable;
