import { Link } from "react-router-dom";
import { CheckCircle2, Clock3, Lightbulb, MessageCircle, Target } from "lucide-react";

const InterviewGuidePage = () => (
  <div className="mx-auto max-w-5xl space-y-8">
    <div>
      <h1 className="text-4xl font-bold">Interview guide</h1>
      <p className="mt-2 text-slate-400">A practical system for turning consistent practice into interview-ready problem solving.</p>
    </div>

    <section className="rounded-xl border border-sky-300 bg-sky-50 p-6 dark:border-sky-500/30 dark:bg-sky-500/10">
      <div className="flex items-start gap-3"><Target className="mt-1 text-sky-600 dark:text-sky-300" /><div><h2 className="text-xl font-semibold text-slate-900 dark:text-white">What “ready” looks like</h2><p className="mt-2 text-slate-700 dark:text-slate-300">You can recognize common patterns, solve familiar medium problems in 30–45 minutes, explain your choices out loud, and state time and space complexity without prompting.</p></div></div>
    </section>

    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="flex items-center gap-2 text-xl font-semibold text-white"><Clock3 size={20} className="text-sky-400" />A simple daily routine</h2><ol className="mt-5 space-y-4 text-sm text-slate-300"><li><strong className="text-white">1. Learn:</strong> Read the topic guide before starting a new pattern.</li><li><strong className="text-white">2. Attempt:</strong> Spend 30–45 minutes on one problem without hints.</li><li><strong className="text-white">3. Reflect:</strong> Write a short note on the pattern, complexity, and mistake you made.</li><li><strong className="text-white">4. Review:</strong> Complete your due reviews to lock the pattern into memory.</li></ol></section>
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="flex items-center gap-2 text-xl font-semibold text-white"><Lightbulb size={20} className="text-amber-400" />Use the tracker honestly</h2><ul className="mt-5 space-y-4 text-sm text-slate-300"><li><strong className="text-white">Practicing:</strong> You understand the idea but need repetition.</li><li><strong className="text-white">Needs review:</strong> Revisit it using the scheduled review queue.</li><li><strong className="text-white">Stuck:</strong> Study a solution, then redo it from scratch later.</li><li><strong className="text-white">Solved:</strong> You can explain and implement it independently.</li></ul></section>
    </div>

    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="flex items-center gap-2 text-xl font-semibold text-white"><CheckCircle2 size={20} className="text-emerald-400" />Recommended progression</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm"><p className="rounded-lg bg-slate-950 p-4 text-slate-300">Arrays, hashing, two pointers, and sliding window</p><p className="rounded-lg bg-slate-950 p-4 text-slate-300">Linked lists, stacks, queues, binary search, and intervals</p><p className="rounded-lg bg-slate-950 p-4 text-slate-300">Trees, graphs, heaps, recursion, and backtracking</p><p className="rounded-lg bg-slate-950 p-4 text-slate-300">Dynamic programming, greedy, and math patterns</p><p className="rounded-lg bg-slate-950 p-4 text-slate-300">Timed mixed practice and repeat mistakes until fluent</p><p className="rounded-lg bg-slate-950 p-4 text-slate-300">Mock interviews plus behavioral-story preparation</p></div></section>

    <section className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-6"><h2 className="flex items-center gap-2 text-xl font-semibold text-white"><MessageCircle size={20} className="text-violet-300" />Interview habits that matter</h2><p className="mt-3 text-sm text-slate-300">Clarify assumptions, narrate your approach before coding, test edge cases, and discuss tradeoffs. Completing every problem is less important than confidently explaining the core patterns.</p><div className="mt-5 flex flex-wrap gap-3"><Link to="/problems" className="rounded-lg bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200 dark:bg-sky-500 dark:text-white dark:hover:bg-sky-600">Browse problems</Link><Link to="/review" className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800">Open review queue</Link></div></section>
  </div>
);

export default InterviewGuidePage;
