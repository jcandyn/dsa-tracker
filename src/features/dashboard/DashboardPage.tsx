import StatCard from "../../components/common/StatCard";
import { Link } from "react-router-dom";
import { STATUS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";

const DashboardPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const solved = problems.filter((problem) => problem.status === STATUS.SOLVED || problem.completed).length;
  const needsReview = problems.filter((problem) => problem.status === STATUS.REVIEW).length;
  const averageConfidence = problems.length
    ? problems.reduce((total, problem) => total + problem.confidence, 0) / problems.length
    : 0;
  const progress = problems.length ? Math.round((solved / problems.length) * 100) : 0;
  const practicing = problems.filter((problem) => problem.status === STATUS.PRACTICING).slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          👋 Welcome Back
        </h1>

        <p className="mt-2 text-slate-400">
          Let's keep the interview streak alive.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          emoji="🔥"
          title="Current Streak"
          value={solved ? "Active" : "Start today"}
        />

        <StatCard
          emoji="🟢"
          title="Solved"
          value={String(solved)}
        />

        <StatCard
          emoji="🟡"
          title="Need Review"
          value={String(needsReview)}
        />

        <StatCard
          emoji="⭐"
          title="Average Confidence"
          value={`${averageConfidence.toFixed(1)} / 5`}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Progress
          </h2>

          <div className="h-4 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full bg-green-500 transition-all" style={{ width: `${progress}%` }} />
          </div>

          <p className="mt-4 text-slate-400">
            {progress}% complete · {solved} of {problems.length} problems solved
          </p>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Today's Goal
          </h2>

          <p className="text-slate-400">
            {practicing.length
              ? `${practicing.length} problem${practicing.length === 1 ? "" : "s"} currently in progress.`
              : "Choose a problem and start building momentum."}
          </p>

          <Link to="/problems" className="mt-6 inline-flex rounded-lg bg-sky-500 px-5 py-2 font-medium text-white transition hover:bg-sky-600">
            Start Practicing
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
