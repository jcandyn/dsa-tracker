import { TOPICS } from "@/constants";
import { ChevronDown } from "lucide-react";

export const COURSE_SET_FILTERS = [
  { id: "all", label: "All problem types" },
  { id: TOPICS.ARRAYS_STRINGS.id, label: "Arrays & Strings" },
  { id: TOPICS.HASHING.id, label: "Hashing" },
  { id: TOPICS.TWO_POINTERS.id, label: "Two Pointers" },
  { id: TOPICS.SLIDING_WINDOW.id, label: "Sliding Window" },
  { id: TOPICS.LINKED_LIST.id, label: "Linked Lists" },
  { id: TOPICS.STACK.id, label: "Stacks & Queues" },
  { id: TOPICS.BINARY_SEARCH.id, label: "Binary Search" },
  { id: TOPICS.INTERVALS.id, label: "Intervals" },
  { id: TOPICS.TREES.id, label: "Trees" },
  { id: TOPICS.HEAP.id, label: "Heaps" },
  { id: TOPICS.GRAPHS.id, label: "Graphs" },
  { id: TOPICS.BACKTRACKING.id, label: "Backtracking" },
  { id: TOPICS.GREEDY.id, label: "Greedy" },
  { id: TOPICS.DP.id, label: "Dynamic Programming" },
  { id: TOPICS.MATH.id, label: "Math" },
] as const;

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const FilterBar = ({ value, onChange }: Props) => (
  <div className="flex items-center gap-3">
    <label htmlFor="course-set-filter" className="text-sm font-medium text-slate-300">
      Problem type
    </label>
    <div className="relative">
      <select
        id="course-set-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="appearance-none rounded-lg border border-slate-700 bg-slate-900 py-2 pl-3 pr-16 text-sm text-white outline-none focus:border-sky-500"
      >
        {COURSE_SET_FILTERS.map((filter) => (
          <option key={filter.id} value={filter.id}>
            {filter.label}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden size={16} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
    </div>
  </div>
);

export default FilterBar;
