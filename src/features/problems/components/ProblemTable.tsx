import { useMemo, useState } from "react";
import { useProblemStore } from "@/store/problemStore";

import FilterBar from "./FilterBar";
import ProblemRow from "./ProblemRow";

const ProblemTable = () => {
  const problems = useProblemStore((state) => state.problems);
  const [courseSet, setCourseSet] = useState("all");

  const filteredProblems = useMemo(
    () => courseSet === "all"
      ? problems
      : problems.filter((problem) => problem.topic.id === courseSet),
    [courseSet, problems],
  );

  return (
    <div className="space-y-4">
      <FilterBar value={courseSet} onChange={setCourseSet} />

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
