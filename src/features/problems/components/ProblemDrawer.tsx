import { useProblemStore } from "@/store/problemStore";

import HintPanel from "./HintPanel";
import ConfidenceStars from "./ConfidenceStars";
import DifficultyBadge from "./DifficultyBadge";
import StatusBadge from "./StatusBadge";

const ProblemDrawer = () => {
  const selectedProblemId = useProblemStore(
    (state) => state.selectedProblemId
  );

  const problems = useProblemStore(
    (state) => state.problems
  );

  const selectProblem = useProblemStore(
    (state) => state.selectProblem
  );

  const updateConfidence = useProblemStore(
    (state) => state.updateConfidence
  );

  const problem = problems.find(
    (p) => p.id === selectedProblemId
  );

  if (!problem) return null;

  return (
    <>
      <div
        onClick={() => selectProblem(null)}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      />

      <aside className="fixed right-0 top-0 z-50 flex h-screen w-[460px] flex-col border-l border-slate-800 bg-slate-950 shadow-2xl">

        {/* Header */}

        <div className="border-b border-slate-800 p-6">

          <div className="mb-4 flex items-start justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">
                {problem.title}
              </h2>

              <p className="mt-1 text-slate-400">
                {problem.topic.icon} {problem.topic.label}
              </p>

            </div>

            <button
              onClick={() => selectProblem(null)}
              className="rounded-lg p-2 transition hover:bg-slate-800"
            >
              ✕
            </button>

          </div>

          <div className="flex items-center gap-3">

            <DifficultyBadge difficulty={problem.difficulty} />

            <StatusBadge
              id={problem.id}
              status={problem.status}
            />

          </div>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-8 overflow-y-auto p-6">

          {/* Confidence */}

          <section>

            <h3 className="mb-3 font-semibold text-white">
              Confidence
            </h3>

            <ConfidenceStars
              value={problem.confidence}
              onChange={(value) =>
                updateConfidence(
                  problem.id,
                  value as 1 | 2 | 3 | 4 | 5
                )
              }
            />

          </section>

          {/* Hints */}

          <HintPanel
            hints={problem.hints}
            pattern={problem.pattern}
            expectedTime={problem.expectedTimeComplexity}
            expectedSpace={problem.expectedSpaceComplexity}
            />

          {/* Companies */}

          <section>

            <h3 className="mb-3 font-semibold">
              Companies
            </h3>

            <div className="flex flex-wrap gap-2">

              {problem.companies?.map((company) => (
                <span
                  key={company}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm"
                >
                  {company}
                </span>
              ))}

            </div>

          </section>

          {/* Notes */}

          <section>

            <h3 className="mb-3 font-semibold">
              Notes
            </h3>

            <textarea
              placeholder="Write your thoughts, solution ideas, common mistakes..."
              className="h-40 w-full rounded-xl border border-slate-800 bg-slate-900 p-4 outline-none focus:border-sky-500"
              defaultValue={problem.notes}
            />

          </section>

        </div>

        {/* Footer */}

        <div className="border-t border-slate-800 p-6">

          <a
            href={problem.url}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Solve on LeetCode ↗
          </a>

        </div>

      </aside>
    </>
  );
};

export default ProblemDrawer;
