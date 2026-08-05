import { DIFFICULTY, STATUS, STATUS_LABELS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";

const Bar = ({ label, value, total, color }: { label: string; value: number; total: number; color: string }) => (
  <div>
    <div className="mb-2 flex justify-between text-sm"><span className="text-slate-300">{label}</span><span className="text-slate-400">{value}</span></div>
    <div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className={`h-full rounded-full ${color}`} style={{ width: `${total ? (value / total) * 100 : 0}%` }} /></div>
  </div>
);

const StatisticsPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const total = problems.length;
  const byStatus = Object.values(STATUS).map((status) => ({ label: STATUS_LABELS[status], value: problems.filter((problem) => problem.status === status).length }));
  const byDifficulty = Object.values(DIFFICULTY).map((difficulty) => ({ label: difficulty, value: problems.filter((problem) => problem.difficulty === difficulty).length }));
  const byTopic = Object.values(problems.reduce<Record<string, { label: string; value: number }>>((groups, problem) => {
    const key = problem.topic.id;
    groups[key] ??= { label: problem.topic.label, value: 0 };
    groups[key].value += 1;
    return groups;
  }, {})).sort((left, right) => right.value - left.value).slice(0, 8);
  const solved = problems.filter((problem) => problem.status === STATUS.SOLVED || problem.completed).length;

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        📈 Statistics
      </h1>

      <p className="text-slate-400">
        A live breakdown of your interview-prep progress.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold text-white">Status breakdown</h2>
          <div className="mt-6 space-y-4">{byStatus.map((item) => <Bar key={item.label} {...item} total={total} color="bg-sky-500" />)}</div>
        </section>
        <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold text-white">Difficulty coverage</h2>
          <div className="mt-6 space-y-4">{byDifficulty.map((item) => <Bar key={item.label} {...item} total={total} color="bg-violet-500" />)}</div>
        </section>
      </div>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-baseline justify-between gap-4"><h2 className="text-lg font-semibold text-white">Topic coverage</h2><span className="text-sm text-slate-400">{solved} solved overall</span></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">{byTopic.map((item) => <Bar key={item.label} {...item} total={total} color="bg-emerald-500" />)}</div>
      </section>
    </div>
  );
};

export default StatisticsPage;
