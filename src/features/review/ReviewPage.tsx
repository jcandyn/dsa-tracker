import { Link, useNavigate } from "react-router-dom";
import { STATUS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";

const ReviewPage = () => {
  const problems = useProblemStore((state) => state.problems);
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const due = problems.filter((problem) => problem.status === STATUS.REVIEW || Boolean(problem.nextReview && problem.nextReview.slice(0, 10) <= today));
  const forgotten = problems.filter((problem) => problem.status === STATUS.STUCK || problem.confidence <= 2).slice(0, 6);
  const upcoming = problems.filter((problem) => problem.nextReview && problem.nextReview.slice(0, 10) > today).sort((left, right) => (left.nextReview ?? "").localeCompare(right.nextReview ?? "")).slice(0, 5);

  return <div className="space-y-6">
    <div><h1 className="text-4xl font-bold">Review</h1><p className="mt-2 text-slate-400">Spaced repetition moves successful reviews through 1, 3, 7, 14, and 30-day intervals.</p></div>
    <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-baseline justify-between"><h2 className="text-xl font-semibold text-white">Today's queue</h2><span className="text-sm text-sky-400">{due.length} due</span></div>
      {due.length === 0 ? <div className="py-8 text-center"><p className="text-slate-400">Your review queue is clear.</p><Link to="/problems" className="mt-4 inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white">Choose a problem</Link></div> : <div className="mt-4 divide-y divide-slate-800">{due.map((problem) => <div key={problem.id} className="flex flex-wrap items-center justify-between gap-4 py-4"><div><p className="font-semibold text-white">{problem.title}</p><p className="text-sm text-slate-400">{problem.topic.label} · Confidence {problem.confidence}/5</p></div><button type="button" onClick={() => navigate(`/problems?open=${problem.id}`)} className="rounded-lg border border-sky-500/50 px-4 py-2 text-sm font-medium text-sky-400 hover:bg-sky-500/10">Review problem</button></div>)}</div>}
    </section>
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="text-xl font-semibold text-white">Next reviews</h2><div className="mt-4 space-y-3">{upcoming.length ? upcoming.map((problem) => <div key={problem.id} className="flex justify-between gap-3 text-sm"><span>{problem.title}</span><span className="text-slate-400">{new Date(problem.nextReview!).toLocaleDateString()}</span></div>) : <p className="text-sm text-slate-400">Complete a review to schedule the next one.</p>}</div></section>
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6"><h2 className="text-xl font-semibold text-white">Forgotten problems</h2><div className="mt-4 space-y-3">{forgotten.length ? forgotten.map((problem) => <div key={problem.id} className="flex justify-between gap-3 text-sm"><span>{problem.title}</span><span className="text-amber-400">{problem.confidence}/5 confidence</span></div>) : <p className="text-sm text-slate-400">No weak spots flagged yet.</p>}</div></section>
    </div>
  </div>;
};

export default ReviewPage;
