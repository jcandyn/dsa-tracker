type Lesson = {
  recognize: string;
  approach: string;
  checklist: string[];
};

const lessons: Record<string, Lesson> = {
  "arrays-strings": { recognize: "Use this area when the input is an ordered collection, string, or grid.", approach: "Start by asking whether one pass, sorting, a prefix value, or index-based traversal removes repeated work.", checklist: ["Write down the input constraints.", "Check empty, one-item, and duplicate cases.", "Decide whether modifying the input is allowed."] },
  hashing: { recognize: "Reach for hashing when you need fast existence checks, counts, or pairings.", approach: "State exactly what the map or set stores before you loop. Then update it once per element.", checklist: ["Map value to count, index, or complement.", "Handle duplicates deliberately.", "Confirm expected O(1) lookup is enough."] },
  "two-pointers": { recognize: "Two pointers work when movement from either end, or a slow/fast scan, can discard impossible answers.", approach: "Define each pointer's invariant and move only the pointer that can improve the answer.", checklist: ["Is the data sorted or sortable?", "What does each pointer guarantee?", "Avoid reusing an index unless allowed."] },
  "sliding-window": { recognize: "Use a window for a contiguous subarray or substring with a condition to maintain.", approach: "Expand the right edge, then shrink the left edge only while the window violates its rule.", checklist: ["Define valid versus invalid window.", "Track counts or a running sum.", "Update the answer at the correct window state."] },
  "linked-list": { recognize: "Linked lists reward pointer rewiring, dummy heads, and slow/fast traversal.", approach: "Draw the nodes and preserve the next pointer before changing any link.", checklist: ["Consider a dummy head.", "Protect next before rewiring.", "Test head, tail, and single-node cases."] },
  stack: { recognize: "Stacks model nested structure, undo behavior, and next-greater/smaller relationships.", approach: "Decide what each stack entry represents and maintain its monotonic or matching invariant.", checklist: ["Use a stack for last-in-first-out work.", "Store indexes when distance matters.", "Pop until the invariant is restored."] },
  trees: { recognize: "Trees call for recursive subproblems or level-by-level processing.", approach: "Choose DFS for subtree information and BFS for level or minimum-depth questions.", checklist: ["Define the base case.", "Say what recursion returns.", "Track height or path state explicitly."] },
  graphs: { recognize: "Graphs appear when relationships, reachability, dependencies, or shortest paths matter.", approach: "Build the adjacency representation first, then choose DFS, BFS, union-find, or shortest path.", checklist: ["Mark visited nodes.", "Check directed versus undirected edges.", "Account for disconnected components."] },
  heap: { recognize: "Use a heap when you repeatedly need the smallest, largest, or top-k item.", approach: "Keep only the candidates that matter and make the heap size part of the invariant.", checklist: ["Choose min-heap or max-heap.", "Bound heap size for top-k.", "Know the push/pop complexity."] },
  greedy: { recognize: "Greedy fits when a local choice can be proven safe for every remaining step.", approach: "Sort or scan by the decision that preserves the most future options.", checklist: ["State the greedy choice.", "Explain why discarded options cannot win.", "Test counterexamples before coding."] },
  "binary-search": { recognize: "Binary search needs a sorted order or a monotonic yes/no answer space.", approach: "Write the search invariant and decide whether the answer moves left or right on every condition.", checklist: ["Use inclusive bounds intentionally.", "Avoid midpoint overflow.", "Test target outside the range."] },
  backtracking: { recognize: "Backtracking explores combinations, permutations, or constrained paths.", approach: "Choose an option, recurse, then undo the choice before trying the next branch.", checklist: ["Define the partial state.", "Prune invalid branches early.", "Copy a solution before storing it."] },
  "dynamic-programming": { recognize: "Dynamic programming applies when subproblems overlap and an optimal answer reuses smaller answers.", approach: "Define the state, recurrence, base cases, and evaluation order before writing loops.", checklist: ["Name what dp[i] means.", "Derive transitions in plain language.", "Compress space only after correctness."] },
  intervals: { recognize: "Intervals need overlap reasoning, usually after sorting by start or end.", approach: "Track the active interval boundary and merge, select, or allocate based on overlap.", checklist: ["Sort by the right endpoint.", "Clarify touching versus overlapping.", "Handle an empty result."] },
  math: { recognize: "Math problems often hide a numeric invariant, modular pattern, or digit operation.", approach: "Look for an algebraic shortcut before simulating; then verify it on small examples.", checklist: ["Check integer bounds.", "Use division and modulo carefully.", "Validate negative and zero cases."] },
};

const LearningPanel = ({ topicId, topicLabel }: { topicId: string; topicLabel: string }) => {
  const lesson = lessons[topicId] ?? { recognize: `Learn the core ${topicLabel} invariant before optimizing.`, approach: "Start with a correct brute-force approach, then identify repeated work to eliminate.", checklist: ["State the invariant.", "Trace a small example.", "Validate time and space complexity."] };
  return <section className="rounded-xl border border-sky-200 bg-sky-50 p-5 dark:border-slate-800 dark:bg-slate-900">
    <div className="flex items-baseline justify-between gap-3"><h3 className="text-xl font-semibold text-sky-900 dark:text-white">Learn before solving</h3><span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/20 dark:text-sky-300">{topicLabel}</span></div>
    <p className="mt-4 text-sm text-slate-700 dark:text-slate-300"><strong>Recognize it:</strong> {lesson.recognize}</p>
    <p className="mt-3 text-sm text-slate-700 dark:text-slate-300"><strong>How to approach it:</strong> {lesson.approach}</p>
    <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">{lesson.checklist.map((item) => <li key={item} className="flex gap-2"><span className="text-sky-600 dark:text-sky-300">✓</span>{item}</li>)}</ul>
    <a href="https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200">Open the course lesson ↗</a>
  </section>;
};

export default LearningPanel;
