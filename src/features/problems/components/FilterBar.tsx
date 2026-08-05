import { TOPICS } from "@/constants";

export const COURSE_SET_FILTERS = [
  { id: "all", label: "All problem types" },
  { id: TOPICS.ARRAYS_STRINGS.id, label: "Arrays & Strings" },
  { id: TOPICS.HASHING.id, label: "Hashing" },
  { id: TOPICS.TWO_POINTERS.id, label: "Two Pointers" },
  { id: TOPICS.SLIDING_WINDOW.id, label: "Sliding Window" },
  { id: TOPICS.LINKED_LIST.id, label: "Linked Lists" },
  { id: TOPICS.STACK.id, label: "Stacks & Queues" },
  { id: TOPICS.TREES.id, label: "Trees" },
  { id: TOPICS.GRAPHS.id, label: "Graphs" },
  { id: TOPICS.HEAP.id, label: "Heaps" },
  { id: TOPICS.INTERVALS.id, label: "Intervals" },
  { id: TOPICS.BINARY_SEARCH.id, label: "Binary Search" },
  { id: TOPICS.DP.id, label: "Dynamic Programming" },
  { id: TOPICS.BACKTRACKING.id, label: "Backtracking" },
  { id: TOPICS.GREEDY.id, label: "Greedy" },
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
    <select
      id="course-set-filter"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-sky-500"
    >
      {COURSE_SET_FILTERS.map((filter) => (
        <option key={filter.id} value={filter.id}>
          {filter.label}
        </option>
      ))}
    </select>
  </div>
);

export default FilterBar;
