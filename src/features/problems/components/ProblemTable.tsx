import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProblemStore } from "@/store/problemStore";

import FilterBar from "./FilterBar";
import ProblemRow from "./ProblemRow";

const ProblemTable = () => {
  const problems = useProblemStore((state) => state.problems);
  const [searchParams] = useSearchParams();
  const [courseSet, setCourseSet] = useState("all");
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const filteredProblems = useMemo(
    () => problems.filter((problem) => {
      const matchesCourse = courseSet === "all" || problem.topic.id === courseSet;
      const searchable = [problem.title, problem.topic.label, problem.difficulty, ...problem.tags].join(" ").toLowerCase();
      return matchesCourse && (!query || searchable.includes(query));
    }),
    [courseSet, problems, query],
  );

  return (
    <div className="space-y-4">
      <FilterBar value={courseSet} onChange={setCourseSet} />

      {query && <p className="text-sm text-slate-400">Showing {filteredProblems.length} result{filteredProblems.length === 1 ? "" : "s"} for “{query}”.</p>}

      <div className="overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full">
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
          {filteredProblems.map((problem) => (
            <ProblemRow
              key={problem.id}
              problem={problem}
            />
          ))}
          </tbody>
        </table>
      </div>

      {filteredProblems.length === 0 && (
        <p className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-slate-400">
          No problems match this type.
        </p>
      )}
    </div>
  );
};

export default ProblemTable;
