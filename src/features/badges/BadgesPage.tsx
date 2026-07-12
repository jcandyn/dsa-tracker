const BadgesPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        🏆 Badges
      </h1>

      <p className="text-slate-400">
        Unlock achievements while studying.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
          🥇

          <h2 className="mt-4 text-lg font-semibold">
            First Solve
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Solve your first problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;