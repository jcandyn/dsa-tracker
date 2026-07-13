import type { Problem } from "@/types/problem";

import { useProblemStore } from "@/store/problemStore";

import StatusBadge from "./StatusBadge";
import DifficultyBadge from "./DifficultyBadge";
import ConfidenceStars from "./ConfidenceStars";

interface Props {
  problem: Problem;
}

const ProblemRow = ({ problem }: Props) => {
    const selectProblem = useProblemStore(
        (state) => state.selectProblem
    );  

    const updateConfidence = useProblemStore(
        (state) => state.updateConfidence
    );
  return (
    <tr
        onClick={() => selectProblem(problem.id)}
        className="group cursor-pointer border-b border-slate-800 transition-colors hover:bg-slate-900"
        >
      <td className="p-4">
        <StatusBadge
            id={problem.id}
            status={problem.status}
        />
      </td>

    <td className="p-4">
        <span className="font-medium text-white transition-colors group-hover:text-slate-200">
            {problem.title}
        </span>
    </td>

      <td className="p-4">
        <DifficultyBadge difficulty={problem.difficulty} />
      </td>

      <td className="p-4">
        <div className="flex items-center gap-2">
            <span>{problem.topic.icon}</span>
            <span>{problem.topic.label}</span>
        </div>
      </td>

      <td className="p-4">
        <ConfidenceStars
          value={problem.confidence}
          onChange={(value) =>
            updateConfidence(
              problem.id,
              value as 1 | 2 | 3 | 4 | 5
            )
          }
        />
      </td>
    </tr>
  );
};

export default ProblemRow;