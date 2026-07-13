interface Props {
  difficulty: string;
}

const DifficultyBadge = ({
  difficulty,
}: Props) => {
  const colors = {
    Easy: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Hard: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm ${
        colors[difficulty as keyof typeof colors]
      }`}
    >
      {difficulty}
    </span>
  );
}

export default DifficultyBadge;