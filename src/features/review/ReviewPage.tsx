const ReviewPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        🧠 Review
      </h1>

      <p className="text-slate-400">
        Spaced repetition review queue.
      </p>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-10">
        No reviews scheduled.
      </div>
    </div>
  );
};

export default ReviewPage;