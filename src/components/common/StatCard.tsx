interface StatCardProps {
  emoji: string;
  title: string;
  value: string;
}

const StatCard = ({ emoji, title, value }: StatCardProps) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500">
      <div className="text-3xl">{emoji}</div>

      <h3 className="mt-4 text-sm text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
};

export default StatCard;