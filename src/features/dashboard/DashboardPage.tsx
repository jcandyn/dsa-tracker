import { Link } from "react-router-dom";
import StatCard from "../../components/common/StatCard";
import { STATUS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";
import { useSettingsStore } from "@/store/settingsStore";

const DashboardPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const activity = useProblemStore((state) => state.activity);
  const dailySolveGoal = useSettingsStore((state) => state.dailySolveGoal);
  const dailyReviewGoal = useSettingsStore((state) => state.dailyReviewGoal);
  const solved = problems.filter((problem) => problem.status === STATUS.SOLVED || problem.completed).length;
  const reviewCount = problems.filter((problem) => problem.status === STATUS.REVIEW).length;
  const confidence = problems.length ? problems.reduce((sum, problem) => sum + problem.confidence, 0) / problems.length : 0;
  const xp = activity.reduce((sum, item) => sum + item.xp, 0);
  const level = Math.floor(xp / 250) + 1;
  const today = new Date().toISOString().slice(0, 10);
  const daily = activity.filter((item) => item.date.slice(0, 10) === today);
  const weekStart = new Date(today); weekStart.setDate(weekStart.getDate() - 7);
  const weeklyXp = activity.filter((item) => new Date(item.date) >= weekStart).reduce((sum, item) => sum + item.xp, 0);
  const activeDays = new Set(activity.map((item) => item.date.slice(0, 10)));
  let streak = 0;
  for (let offset = 0; offset < 365; offset += 1) { const date = new Date(today); date.setDate(date.getDate() - offset); if (!activeDays.has(date.toISOString().slice(0, 10))) break; streak += 1; }
  const completion = problems.length ? Math.round((solved / problems.length) * 100) : 0;

  return <div className="space-y-8">
    <div><h1 className="text-4xl font-bold text-white">Welcome back</h1><p className="mt-2 text-slate-400">Build consistency, earn XP, and keep your interview prep moving.</p></div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"><StatCard emoji="🔥" title="Current Streak" value={`${streak} days`} /><StatCard emoji="✅" title="Solved" value={String(solved)} /><StatCard emoji="🧠" title="Due for Review" value={String(reviewCount)} /><StatCard emoji="⭐" title="Average Confidence" value={`${confidence.toFixed(1)} / 5`} /></div>
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/15 to-sky-500/10 p-6 transition hover:scale-[1.01]"><div className="flex justify-between"><h2 className="text-xl font-semibold text-white">Level {level}</h2><span className="text-sky-300">{xp} XP</span></div><p className="mt-2 text-sm text-slate-300">Solve problems and complete reviews to level up.</p><div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-400" style={{ width: `${((xp % 250) / 250) * 100}%` }} /></div><p className="mt-2 text-xs text-slate-400">{250 - (xp % 250)} XP until Level {level + 1}</p></section>
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="text-xl font-semibold text-white">Daily & weekly quests</h2><div className="mt-4 space-y-3 text-sm"><p className="flex justify-between"><span>Solve {dailySolveGoal} problems</span><span className="text-sky-400">{Math.min(daily.filter((item) => item.type === "solve").length, dailySolveGoal)}/{dailySolveGoal}</span></p><p className="flex justify-between"><span>Complete {dailyReviewGoal} reviews</span><span className="text-emerald-400">{Math.min(daily.filter((item) => item.type === "review").length, dailyReviewGoal)}/{dailyReviewGoal}</span></p><p className="flex justify-between"><span>Earn 200 XP this week</span><span className="text-violet-400">{Math.min(weeklyXp, 200)}/200</span></p></div></section>
    </div>
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><div className="flex items-center justify-between gap-4"><div><h2 className="text-xl font-semibold">Progress</h2><p className="mt-1 text-slate-400">{completion}% complete · {solved} of {problems.length} problems solved</p></div><Link to="/problems" className="rounded-lg bg-sky-100 px-5 py-2 font-medium text-sky-700 hover:bg-sky-200 dark:bg-sky-500 dark:text-white dark:hover:bg-sky-600">Start practicing</Link></div><div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-800"><div className="h-full bg-emerald-500 transition-all" style={{ width: `${completion}%` }} /></div></section>
  </div>;
};

export default DashboardPage;
