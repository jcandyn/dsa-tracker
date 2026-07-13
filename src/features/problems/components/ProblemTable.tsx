import { useProblemStore } from "@/store/problemStore";

import ProblemRow from "./ProblemRow";

const ProblemTable = () => {
  const problems = useProblemStore((state) => state.problems);

  return (
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
          {problems.map((problem) => (
            <ProblemRow
              key={problem.id}
              problem={problem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemTable;