import { STATUS, STATUS_DISPLAY, type Status } from "@/constants";
import { useProblemStore } from "@/store/problemStore";

interface Props {
  id: string;
  status: Status;
}

const order: Status[] = [
  STATUS.NOT_STARTED,
  STATUS.SOLVED,
  STATUS.REVIEW,
  STATUS.PRACTICING,
  STATUS.STUCK,
];

const StatusBadge = ({ id, status }: Props) => {
  const updateStatus = useProblemStore(
    (state) => state.updateStatus
  );

  const handleClick = () => {
    const current = order.indexOf(status);
    const next = order[(current + 1) % order.length];

    updateStatus(id, next);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-2xl transition hover:scale-125"
      title={status}
    >
      {STATUS_DISPLAY[status]}
    </button>
  );
};

export default StatusBadge;