interface Props {
  value: number;
  onChange?: (value: number) => void;
}

const ConfidenceStars = ({ value, onChange }: Props) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange?.(star)}
          className="text-xl text-yellow-400 transition hover:scale-125"
        >
          {star <= value ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
};

export default ConfidenceStars;