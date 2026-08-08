import { STATUS, STATUS_DISPLAY, STATUS_LABELS, type Status } from "@/constants";
import { useProblemStore } from "@/store/problemStore";
import { ChevronDown } from "lucide-react";

interface Props {
  id: string;
  status: Status;
}

const statusOptions = [
  STATUS.NOT_STARTED,
  STATUS.PRACTICING,
  STATUS.REVIEW,
  STATUS.SOLVED,
  STATUS.STUCK,
] as const;

const StatusBadge = ({ id, status }: Props) => {
  const updateStatus = useProblemStore((state) => state.updateStatus);

  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl" aria-label={STATUS_LABELS[status]} title={STATUS_LABELS[status]}>
        {STATUS_DISPLAY[status]}
      </span>
      <label className="sr-only" htmlFor={`status-${id}`}>Status</label>
      <div className="relative">
        <select
          id={`status-${id}`}
          value={status}
          onChange={(event) => updateStatus(id, event.target.value as Status)}
          className="appearance-none rounded-md border border-slate-300 bg-white py-1 pl-2 pr-11 text-xs text-slate-700 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          {statusOptions.map((option) => <option key={option} value={option}>{STATUS_LABELS[option]}</option>)}
        </select>
        <ChevronDown aria-hidden size={15} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
      </div>
    </div>
  );
};

export default StatusBadge;
