const StatisticsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        📈 Statistics
      </h1>

      <p className="text-slate-400">
        Your coding progress will appear here.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-64 rounded-xl border border-slate-800 bg-slate-900" />
        <div className="h-64 rounded-xl border border-slate-800 bg-slate-900" />
      </div>
    </div>
  );
};

export default StatisticsPage;