import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useProblemStore, type Activity } from "@/store/problemStore";

type Celebration = { id: number; title: string; message: string };

const GamificationCelebration = () => {
  const activity = useProblemStore((state) => state.activity);
  const previousCount = useRef(activity.length);
  const previousXp = useRef(activity.reduce((total, item) => total + item.xp, 0));
  const [celebration, setCelebration] = useState<Celebration | null>(null);

  useEffect(() => {
    if (activity.length <= previousCount.current) return;
    const latest = activity.at(-1) as Activity;
    const currentXp = activity.reduce((total, item) => total + item.xp, 0);
    const previousLevel = Math.floor(previousXp.current / 250) + 1;
    const currentLevel = Math.floor(currentXp / 250) + 1;
    setCelebration({
      id: Date.now(),
      title: currentLevel > previousLevel ? `Level ${currentLevel} unlocked!` : latest.type === "review" ? "Review complete!" : "Problem solved!",
      message: currentLevel > previousLevel ? "Your consistency is paying off." : `+${latest.xp} XP earned`,
    });
    previousCount.current = activity.length;
    previousXp.current = currentXp;
  }, [activity]);

  return <AnimatePresence>{celebration && <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: -12 }} transition={{ type: "spring", stiffness: 420, damping: 22 }} className="fixed bottom-6 right-6 z-[100] overflow-hidden rounded-2xl border border-amber-300/50 bg-slate-900 px-6 py-4 text-white shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-sky-500/20 to-amber-400/20" />
    <div className="relative flex items-center gap-3"><motion.span animate={{ rotate: [0, -12, 12, 0], scale: [1, 1.25, 1] }} transition={{ duration: 0.7, repeat: 1 }} className="text-3xl">🎉</motion.span><div><p className="font-bold">{celebration.title}</p><p className="text-sm text-slate-300">{celebration.message}</p></div><button type="button" onClick={() => setCelebration(null)} className="ml-3 text-slate-300 hover:text-white">×</button></div>
  </motion.div>}</AnimatePresence>;
};

export default GamificationCelebration;
