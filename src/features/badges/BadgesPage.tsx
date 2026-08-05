import { STATUS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";

const achievements = [
  { id: "first-solve", icon: "🥇", title: "First Solve", description: "Solve your first problem.", requirement: 1 },
  { id: "starter", icon: "🌱", title: "Getting Started", description: "Solve 5 problems.", requirement: 5 },
  { id: "focused", icon: "🎯", title: "Focused Learner", description: "Solve 15 problems.", requirement: 15 },
  { id: "halfway", icon: "🚀", title: "Halfway There", description: "Solve 50 problems.", requirement: 50 },
  { id: "century", icon: "💯", title: "Century Club", description: "Solve 100 problems.", requirement: 100 },
];

const BadgesPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const solved = problems.filter((problem) => problem.status === STATUS.SOLVED || problem.completed).length;
  const unlocked = achievements.filter((badge) => solved >= badge.requirement).length;

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">🏆 Badges</h1>
      <p className="text-slate-400">{unlocked} of {achievements.length} achievements unlocked.</p>

      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((badge) => {
          const isUnlocked = solved >= badge.requirement;
          return <div key={badge.id} className={`rounded-xl border p-8 text-center ${isUnlocked ? "border-amber-400/50 bg-amber-400/10" : "border-slate-800 bg-slate-900 opacity-60"}`}>
            <div className="text-4xl">{isUnlocked ? badge.icon : "🔒"}</div>
            <h2 className="mt-4 text-lg font-semibold text-white">{badge.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{badge.description}</p>
            <p className="mt-4 text-xs text-slate-500">{Math.min(solved, badge.requirement)} / {badge.requirement}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default BadgesPage;
