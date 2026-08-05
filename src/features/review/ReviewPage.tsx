import { Link } from "react-router-dom";
import { STATUS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";

const ReviewPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const updateStatus = useProblemStore((state) => state.updateStatus);
  const today = new Date().toISOString().slice(0, 10);
  const reviewQueue = problems.filter((problem) =>
    problem.status === STATUS.REVIEW || Boolean(problem.nextReview && problem.nextReview.slice(0, 10) <= today),
  );

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        🧠 Review
      </h1>

      <p className="text-slate-400">
        Spaced repetition review queue.
      </p>

      {reviewQueue.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
          <p className="text-lg font-medium text-white">Your review queue is clear.</p>
          <p className="mt-2 text-slate-400">Mark a problem as “Needs Review” from the Problems page to add it here.</p>
          <Link to="/problems" className="mt-6 inline-flex rounded-lg bg-sky-500 px-5 py-2 font-medium text-white hover:bg-sky-600">Browse problems</Link>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          {reviewQueue.map((problem) => (
            <div key={problem.id} className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 p-5 last:border-0">
              <div>
                <p className="font-semibold text-white">{problem.title}</p>
                <p className="mt-1 text-sm text-slate-400">{problem.topic.label} · Confidence {problem.confidence}/5</p>
              </div>
              <button type="button" onClick={() => updateStatus(problem.id, STATUS.SOLVED)} className="rounded-lg border border-emerald-500/50 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/10">
                Mark reviewed
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
