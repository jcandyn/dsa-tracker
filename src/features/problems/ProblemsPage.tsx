const ProblemsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          💻 Problems
        </h1>

        <p className="mt-2 text-slate-400">
          Manage every algorithm you've solved.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
        <h2 className="text-xl font-semibold">
          No Problems Yet
        </h2>

        <p className="mt-3 text-slate-400">
          Import your seed data or add your first problem.
        </p>
      </div>
    </div>
  );
};

export default ProblemsPage;