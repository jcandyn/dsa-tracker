import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DIFFICULTY, STATUS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";

const COLORS = ["#38bdf8", "#a78bfa", "#34d399"];
const dayKey = (date: Date) => date.toISOString().slice(0, 10);

const StatisticsPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const activity = useProblemStore((state) => state.activity);
  const difficultyData = Object.values(DIFFICULTY).map((difficulty) => ({ name: difficulty, value: problems.filter((problem) => problem.difficulty === difficulty).length }));
  const topicData = Object.values(problems.reduce<Record<string, { name: string; solved: number; total: number }>>((groups, problem) => {
    const key = problem.topic.id;
    groups[key] ??= { name: problem.topic.label, solved: 0, total: 0 };
    groups[key].total += 1;
    if (problem.status === STATUS.SOLVED || problem.completed) groups[key].solved += 1;
    return groups;
  }, {})).map((topic) => ({ ...topic, mastery: Math.round((topic.solved / topic.total) * 100) })).sort((left, right) => right.mastery - left.mastery);
  const weeklyData = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(); date.setDate(date.getDate() - (6 - index));
    const dateKey = dayKey(date);
    return { day: date.toLocaleDateString(undefined, { weekday: "short" }), xp: activity.filter((item) => item.date.slice(0, 10) === dateKey).reduce((sum, item) => sum + item.xp, 0) };
  });
  const heatmap = Array.from({ length: 35 }, (_, index) => { const date = new Date(); date.setDate(date.getDate() - (34 - index)); const key = dayKey(date); return { key, label: date.toLocaleDateString(undefined, { month: "short", day: "numeric" }), count: activity.filter((item) => item.date.slice(0, 10) === key).length }; });
  const statusSummary = [
    { label: "Needs review", value: problems.filter((problem) => problem.status === STATUS.REVIEW).length, color: "bg-amber-400" },
    { label: "Practicing", value: problems.filter((problem) => problem.status === STATUS.PRACTICING).length, color: "bg-orange-400" },
    { label: "Stuck", value: problems.filter((problem) => problem.status === STATUS.STUCK).length, color: "bg-rose-500" },
    { label: "Solved", value: problems.filter((problem) => problem.status === STATUS.SOLVED || problem.completed).length, color: "bg-emerald-400" },
  ];

  return <div className="space-y-6">
    <div><h1 className="text-4xl font-bold">📈 Statistics</h1><p className="mt-2 text-slate-400">Progress, consistency, and strengths across your interview prep.</p></div>
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="h-80 rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="font-semibold text-white">Difficulty distribution</h2><ResponsiveContainer width="100%" height="90%"><PieChart><Pie data={difficultyData} dataKey="value" nameKey="name" outerRadius={90} label>{difficultyData.map((item, index) => <Cell key={item.name} fill={COLORS[index]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></section>
      <section className="h-80 rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="font-semibold text-white">Weekly progress</h2><ResponsiveContainer width="100%" height="90%"><BarChart data={weeklyData}><CartesianGrid strokeDasharray="3 3" stroke="#334155" /><XAxis dataKey="day" /><YAxis /><Tooltip /><Bar dataKey="xp" fill="#38bdf8" radius={[6, 6, 0, 0]} /></BarChart></ResponsiveContainer></section>
    </div>
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="font-semibold text-white">Study activity</h2><div className="mt-5 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><p className="text-sm text-slate-400">Your last 35 days of activity.</p><div className="mt-4 grid w-fit grid-cols-7 gap-1.5">{heatmap.map((day) => <div key={day.key} title={`${day.label}: ${day.count} activities`} className={`h-4 w-4 rounded-sm ${day.count === 0 ? "bg-slate-800" : day.count === 1 ? "bg-emerald-800" : day.count === 2 ? "bg-emerald-600" : "bg-emerald-400"}`} />)}</div></div><div className="w-full md:max-w-xl"><h3 className="text-sm font-medium text-slate-300">Problem status</h3><div className="mt-3 grid grid-cols-2 gap-3">{statusSummary.map((status) => <div key={status.label} className="rounded-lg border border-slate-700 bg-slate-950 p-3"><div className="flex items-center gap-2 text-xs text-slate-400"><span className={`h-2.5 w-2.5 rounded-full ${status.color}`} />{status.label}</div><p className="mt-1 text-2xl font-semibold text-white">{status.value}</p></div>)}</div></div></div></section>
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="font-semibold text-white">Topic mastery</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{topicData.map((topic) => <div key={topic.name}><div className="mb-1 flex justify-between text-sm"><span>{topic.name}</span><span className="text-slate-400">{topic.mastery}% · {topic.solved}/{topic.total}</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-violet-500" style={{ width: `${topic.mastery}%` }} /></div></div>)}</div></section>
  </div>;
};

export default StatisticsPage;
