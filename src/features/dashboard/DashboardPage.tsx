import StatCard from "../../components/common/StatCard";

const DashboardPage = () => {
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
          value="0 Days"
        />

        <StatCard
          emoji="🟢"
          title="Solved"
          value="0"
        />

        <StatCard
          emoji="🟡"
          title="Need Review"
          value="0"
        />

        <StatCard
          emoji="⭐"
          title="Average Confidence"
          value="0 / 5"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Progress
          </h2>

          <div className="h-4 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-0 bg-green-500" />
          </div>

          <p className="mt-4 text-slate-400">
            0% Complete
          </p>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Today's Goal
          </h2>

          <p className="text-slate-400">
            Solve 2 problems today.
          </p>

          <button className="mt-6 rounded-lg bg-sky-500 px-5 py-2 font-medium text-white transition hover:bg-sky-600">
            Start Practicing
          </button>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;