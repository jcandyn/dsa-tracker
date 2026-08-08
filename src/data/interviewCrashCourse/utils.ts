import { DIFFICULTY } from "@/constants/difficulty";
import type { Pattern } from "@/constants/patterns";
import type { Topic } from "@/constants/topics";
import type { ProblemTemplate } from "@/types/problemTemplate";

type CourseProblem = {
  title: string;
  slug: string;
  difficulty: ProblemTemplate["difficulty"];
  time: string;
  space: string;
  tags: string[];
  pattern?: Pattern;
};

const supplementalProblems: Record<string, CourseProblem[]> = {
  "arrays-strings": [
    { title: "Rotate Array", slug: "rotate-array", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Math", "Two Pointers"] },
    { title: "Set Matrix Zeroes", slug: "set-matrix-zeroes", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(1)", tags: ["Array", "Hash Table", "Matrix"] },
  ],
  hashing: [
    { title: "First Unique Character in a String", slug: "first-unique-character-in-a-string", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Hash Table", "Queue", "String"] },
    { title: "Find All Anagrams in a String", slug: "find-all-anagrams-in-a-string", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Hash Table", "String", "Sliding Window"] },
  ],
  "two-pointers": [
    { title: "Remove Duplicates from Sorted Array", slug: "remove-duplicates-from-sorted-array", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Two Pointers"] },
    { title: "Sort Colors", slug: "sort-colors", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Two Pointers", "Sorting"] },
  ],
  "sliding-window": [
    { title: "Permutation in String", slug: "permutation-in-string", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Hash Table", "String", "Sliding Window"] },
    { title: "Sliding Window Maximum", slug: "sliding-window-maximum", difficulty: DIFFICULTY.HARD, time: "O(n)", space: "O(k)", tags: ["Array", "Queue", "Sliding Window", "Monotonic Queue"] },
  ],
  "linked-list": [
    { title: "Remove Nth Node From End of List", slug: "remove-nth-node-from-end-of-list", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Linked List", "Two Pointers"] },
    { title: "Merge K Sorted Lists", slug: "merge-k-sorted-lists", difficulty: DIFFICULTY.HARD, time: "O(n log k)", space: "O(k)", tags: ["Linked List", "Divide and Conquer", "Heap"] },
  ],
  stack: [
    { title: "Generate Parentheses", slug: "generate-parentheses", difficulty: DIFFICULTY.MEDIUM, time: "O(4^n / sqrt(n))", space: "O(n)", tags: ["String", "Backtracking"] },
    { title: "Largest Rectangle in Histogram", slug: "largest-rectangle-in-histogram", difficulty: DIFFICULTY.HARD, time: "O(n)", space: "O(n)", tags: ["Array", "Stack", "Monotonic Stack"] },
  ],
  trees: [
    { title: "Validate Binary Search Tree", slug: "validate-binary-search-tree", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(h)", tags: ["Tree", "Depth-First Search", "Binary Search Tree"] },
    { title: "Serialize and Deserialize Binary Tree", slug: "serialize-and-deserialize-binary-tree", difficulty: DIFFICULTY.HARD, time: "O(n)", space: "O(n)", tags: ["String", "Tree", "Depth-First Search"] },
  ],
  graphs: [
    { title: "Graph Valid Tree", slug: "graph-valid-tree", difficulty: DIFFICULTY.MEDIUM, time: "O(V + E)", space: "O(V + E)", tags: ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"] },
    { title: "Network Delay Time", slug: "network-delay-time", difficulty: DIFFICULTY.MEDIUM, time: "O(E log V)", space: "O(V + E)", tags: ["Heap", "Graph", "Shortest Path"] },
  ],
  heap: [
    { title: "Find Median from Data Stream", slug: "find-median-from-data-stream", difficulty: DIFFICULTY.HARD, time: "O(log n)", space: "O(n)", tags: ["Two Heaps", "Design", "Heap"] },
    { title: "Reorganize String", slug: "reorganize-string", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Hash Table", "String", "Greedy", "Heap"] },
  ],
  intervals: [
    { title: "Meeting Rooms", slug: "meeting-rooms", difficulty: DIFFICULTY.EASY, time: "O(n log n)", space: "O(1)", tags: ["Array", "Sorting", "Intervals"] },
    { title: "Minimum Number of Arrows to Burst Balloons", slug: "minimum-number-of-arrows-to-burst-balloons", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(1)", tags: ["Array", "Greedy", "Sorting", "Intervals"] },
  ],
  "binary-search": [
    { title: "Find First and Last Position of Element in Sorted Array", slug: "find-first-and-last-position-of-element-in-sorted-array", difficulty: DIFFICULTY.MEDIUM, time: "O(log n)", space: "O(1)", tags: ["Array", "Binary Search"] },
    { title: "Median of Two Sorted Arrays", slug: "median-of-two-sorted-arrays", difficulty: DIFFICULTY.HARD, time: "O(log(min(m, n)))", space: "O(1)", tags: ["Array", "Binary Search"] },
  ],
  "dynamic-programming": [
    { title: "Decode Ways", slug: "decode-ways", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["String", "Dynamic Programming"] },
    { title: "Word Break", slug: "word-break", difficulty: DIFFICULTY.MEDIUM, time: "O(n^2)", space: "O(n)", tags: ["Hash Table", "String", "Dynamic Programming", "Trie"] },
  ],
  backtracking: [
    { title: "Palindrome Partitioning", slug: "palindrome-partitioning", difficulty: DIFFICULTY.MEDIUM, time: "O(n * 2^n)", space: "O(n)", tags: ["String", "Dynamic Programming", "Backtracking"] },
    { title: "Letter Combinations of a Phone Number", slug: "letter-combinations-of-a-phone-number", difficulty: DIFFICULTY.MEDIUM, time: "O(4^n)", space: "O(n)", tags: ["Hash Table", "String", "Backtracking"] },
  ],
  greedy: [
    { title: "Hand of Straights", slug: "hand-of-straights", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Array", "Hash Table", "Greedy", "Sorting"] },
    { title: "Valid Parenthesis String", slug: "valid-parenthesis-string", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["String", "Dynamic Programming", "Greedy"] },
  ],
  math: [
    { title: "Add Digits", slug: "add-digits", difficulty: DIFFICULTY.EASY, time: "O(1)", space: "O(1)", tags: ["Math", "Simulation", "Number Theory"] },
    { title: "Integer to Roman", slug: "integer-to-roman", difficulty: DIFFICULTY.MEDIUM, time: "O(1)", space: "O(1)", tags: ["Hash Table", "Math", "String"] },
  ],
};

const leetCodeCrashCourseProblems: Record<string, CourseProblem[]> = {
  "arrays-strings": [
    { title: "Reverse String", slug: "reverse-string", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Two Pointers", "String"] },
    { title: "Squares of a Sorted Array", slug: "squares-of-a-sorted-array", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(n)", tags: ["Array", "Two Pointers", "Sorting"] },
    { title: "Maximum Average Subarray I", slug: "maximum-average-subarray-i", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Sliding Window"] },
    { title: "Max Consecutive Ones III", slug: "max-consecutive-ones-iii", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Sliding Window"] },
    { title: "Running Sum of 1d Array", slug: "running-sum-of-1d-array", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Prefix Sum"] },
    { title: "Minimum Value to Get Positive Step by Step Sum", slug: "minimum-value-to-get-positive-step-by-step-sum", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Prefix Sum"] },
    { title: "K Radius Subarray Averages", slug: "k-radius-subarray-averages", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Array", "Sliding Window", "Prefix Sum"] },
  ],
  hashing: [
    { title: "Check if the Sentence Is Pangram", slug: "check-if-the-sentence-is-pangram", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Hash Table", "String", "Bit Manipulation"] },
    { title: "Missing Number", slug: "missing-number", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Hash Table", "Math", "Bit Manipulation"] },
    { title: "Counting Elements", slug: "counting-elements", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(n)", tags: ["Array", "Hash Table"] },
    { title: "Find Players With Zero or One Losses", slug: "find-players-with-zero-or-one-losses", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Array", "Hash Table", "Sorting"] },
    { title: "Largest Unique Number", slug: "largest-unique-number", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(n)", tags: ["Array", "Hash Table"] },
    { title: "Maximum Number of Balloons", slug: "maximum-number-of-balloons", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Hash Table", "String", "Counting"] },
    { title: "Contiguous Array", slug: "contiguous-array", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Array", "Hash Table", "Prefix Sum"] },
    { title: "Jewels and Stones", slug: "jewels-and-stones", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(n)", tags: ["Hash Table", "String"] },
  ],
  "linked-list": [
    { title: "Middle of the Linked List", slug: "middle-of-the-linked-list", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Linked List", "Two Pointers"] },
    { title: "Remove Duplicates from Sorted List", slug: "remove-duplicates-from-sorted-list", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Linked List"] },
    { title: "Reverse Linked List II", slug: "reverse-linked-list-ii", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Linked List"] },
  ],
  stack: [
    { title: "Simplify Path", slug: "simplify-path", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["String", "Stack"] },
    { title: "Make The String Great", slug: "make-the-string-great", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(n)", tags: ["String", "Stack"] },
    { title: "Moving Average from Data Stream", slug: "moving-average-from-data-stream", difficulty: DIFFICULTY.EASY, time: "O(1)", space: "O(size)", tags: ["Array", "Queue", "Design", "Data Stream"] },
    { title: "Next Greater Element I", slug: "next-greater-element-i", difficulty: DIFFICULTY.EASY, time: "O(n + m)", space: "O(n)", tags: ["Array", "Hash Table", "Stack", "Monotonic Stack"] },
    { title: "Online Stock Span", slug: "online-stock-span", difficulty: DIFFICULTY.MEDIUM, time: "O(1) amortized", space: "O(n)", tags: ["Stack", "Monotonic Stack", "Design"] },
  ],
  trees: [
    { title: "Minimum Depth of Binary Tree", slug: "minimum-depth-of-binary-tree", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(n)", tags: ["Tree", "Depth-First Search", "Breadth-First Search"] },
    { title: "Maximum Difference Between Node and Ancestor", slug: "maximum-difference-between-node-and-ancestor", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(h)", tags: ["Tree", "Depth-First Search"] },
    { title: "Deepest Leaves Sum", slug: "deepest-leaves-sum", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Tree", "Depth-First Search", "Breadth-First Search"] },
    { title: "Binary Tree Zigzag Level Order Traversal", slug: "binary-tree-zigzag-level-order-traversal", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Tree", "Breadth-First Search"] },
    { title: "Insert into a Binary Search Tree", slug: "insert-into-a-binary-search-tree", difficulty: DIFFICULTY.MEDIUM, time: "O(h)", space: "O(h)", tags: ["Tree", "Binary Search Tree", "Recursion"] },
  ],
  graphs: [
    { title: "Find if Path Exists in Graph", slug: "find-if-path-exists-in-graph", difficulty: DIFFICULTY.EASY, time: "O(V + E)", space: "O(V + E)", tags: ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"] },
    { title: "Number of Connected Components in an Undirected Graph", slug: "number-of-connected-components-in-an-undirected-graph", difficulty: DIFFICULTY.MEDIUM, time: "O(V + E)", space: "O(V)", tags: ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"] },
    { title: "Max Area of Island", slug: "max-area-of-island", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(mn)", tags: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"] },
    { title: "Reachable Nodes With Restrictions", slug: "reachable-nodes-with-restrictions", difficulty: DIFFICULTY.MEDIUM, time: "O(V + E)", space: "O(V + E)", tags: ["Hash Table", "Depth-First Search", "Breadth-First Search", "Graph"] },
    { title: "Nearest Exit from Entrance in Maze", slug: "nearest-exit-from-entrance-in-maze", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(mn)", tags: ["Array", "Breadth-First Search", "Matrix"] },
    { title: "Snakes and Ladders", slug: "snakes-and-ladders", difficulty: DIFFICULTY.MEDIUM, time: "O(n^2)", space: "O(n^2)", tags: ["Array", "Breadth-First Search", "Matrix"] },
    { title: "Minimum Genetic Mutation", slug: "minimum-genetic-mutation", difficulty: DIFFICULTY.MEDIUM, time: "O(n^2L)", space: "O(nL)", tags: ["Hash Table", "String", "Breadth-First Search"] },
    { title: "Jump Game III", slug: "jump-game-iii", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(n)", tags: ["Array", "Depth-First Search", "Breadth-First Search"] },
    { title: "Detonate the Maximum Bombs", slug: "detonate-the-maximum-bombs", difficulty: DIFFICULTY.MEDIUM, time: "O(n^2)", space: "O(n^2)", tags: ["Array", "Math", "Depth-First Search", "Graph"] },
    { title: "Word Ladder", slug: "word-ladder", difficulty: DIFFICULTY.HARD, time: "O(NL^2)", space: "O(NL)", tags: ["Hash Table", "String", "Breadth-First Search"] },
    { title: "Cheapest Flights Within K Stops", slug: "cheapest-flights-within-k-stops", difficulty: DIFFICULTY.MEDIUM, time: "O(kE)", space: "O(V)", tags: ["Dynamic Programming", "Breadth-First Search", "Graph"] },
  ],
  heap: [
    { title: "Kth Largest Element in a Stream", slug: "kth-largest-element-in-a-stream", difficulty: DIFFICULTY.EASY, time: "O(log k)", space: "O(k)", tags: ["Tree", "Design", "Heap", "Data Stream"] },
    { title: "Remove Stones to Minimize the Total", slug: "remove-stones-to-minimize-the-total", difficulty: DIFFICULTY.MEDIUM, time: "O(k log n)", space: "O(n)", tags: ["Array", "Heap"] },
    { title: "Minimum Cost to Connect Sticks", slug: "minimum-cost-to-connect-sticks", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Array", "Greedy", "Heap"] },
  ],
  greedy: [
    { title: "Maximum 69 Number", slug: "maximum-69-number", difficulty: DIFFICULTY.EASY, time: "O(log n)", space: "O(1)", tags: ["Math", "Greedy"] },
    { title: "Maximum Units on a Truck", slug: "maximum-units-on-a-truck", difficulty: DIFFICULTY.EASY, time: "O(n log n)", space: "O(1)", tags: ["Array", "Greedy", "Sorting"] },
    { title: "How Many Apples Can You Put into the Basket", slug: "how-many-apples-can-you-put-into-the-basket", difficulty: DIFFICULTY.EASY, time: "O(n log n)", space: "O(1)", tags: ["Array", "Greedy", "Sorting"] },
    { title: "Reduce Array Size to The Half", slug: "reduce-array-size-to-the-half", difficulty: DIFFICULTY.MEDIUM, time: "O(n log n)", space: "O(n)", tags: ["Array", "Hash Table", "Greedy", "Sorting"] },
  ],
  "binary-search": [
    { title: "Search Insert Position", slug: "search-insert-position", difficulty: DIFFICULTY.EASY, time: "O(log n)", space: "O(1)", tags: ["Array", "Binary Search"] },
    { title: "Longest Subsequence With Limited Sum", slug: "longest-subsequence-with-limited-sum", difficulty: DIFFICULTY.EASY, time: "O(n log n)", space: "O(n)", tags: ["Array", "Binary Search", "Greedy", "Sorting", "Prefix Sum"] },
    { title: "Find the Smallest Divisor Given a Threshold", slug: "find-the-smallest-divisor-given-a-threshold", difficulty: DIFFICULTY.MEDIUM, time: "O(n log m)", space: "O(1)", tags: ["Array", "Binary Search"] },
    { title: "Divide Chocolate", slug: "divide-chocolate", difficulty: DIFFICULTY.HARD, time: "O(n log n)", space: "O(1)", tags: ["Array", "Binary Search"] },
    { title: "Split Array Largest Sum", slug: "split-array-largest-sum", difficulty: DIFFICULTY.HARD, time: "O(n log sum)", space: "O(1)", tags: ["Array", "Binary Search", "Dynamic Programming"] },
  ],
  backtracking: [
    { title: "All Paths From Source to Target", slug: "all-paths-from-source-to-target", difficulty: DIFFICULTY.MEDIUM, time: "O(2^n · n)", space: "O(n)", tags: ["Backtracking", "Depth-First Search", "Graph"] },
    { title: "Numbers With Same Consecutive Differences", slug: "numbers-with-same-consecutive-differences", difficulty: DIFFICULTY.MEDIUM, time: "O(2^n)", space: "O(2^n)", tags: ["Backtracking", "Breadth-First Search"] },
    { title: "Combination Sum III", slug: "combination-sum-iii", difficulty: DIFFICULTY.MEDIUM, time: "O(C(9,k))", space: "O(k)", tags: ["Array", "Backtracking"] },
  ],
  "dynamic-programming": [
    { title: "Min Cost Climbing Stairs", slug: "min-cost-climbing-stairs", difficulty: DIFFICULTY.EASY, time: "O(n)", space: "O(1)", tags: ["Array", "Dynamic Programming"] },
    { title: "Best Time to Buy and Sell Stock with Transaction Fee", slug: "best-time-to-buy-and-sell-stock-with-transaction-fee", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Dynamic Programming", "Greedy"] },
    { title: "Best Time to Buy and Sell Stock with Cooldown", slug: "best-time-to-buy-and-sell-stock-with-cooldown", difficulty: DIFFICULTY.MEDIUM, time: "O(n)", space: "O(1)", tags: ["Array", "Dynamic Programming"] },
    { title: "Unique Paths II", slug: "unique-paths-ii", difficulty: DIFFICULTY.MEDIUM, time: "O(mn)", space: "O(n)", tags: ["Array", "Dynamic Programming", "Matrix"] },
    { title: "Minimum Falling Path Sum", slug: "minimum-falling-path-sum", difficulty: DIFFICULTY.MEDIUM, time: "O(n^2)", space: "O(n)", tags: ["Array", "Dynamic Programming", "Matrix"] },
  ],
  math: [
    { title: "Hamming Distance", slug: "hamming-distance", difficulty: DIFFICULTY.EASY, time: "O(1)", space: "O(1)", tags: ["Math", "Bit Manipulation"] },
  ],
};

export const createProblemSet = (
  topic: Topic,
  defaultPattern: Pattern,
  problems: CourseProblem[],
): ProblemTemplate[] => [...problems, ...(supplementalProblems[topic.id] ?? []), ...(leetCodeCrashCourseProblems[topic.id] ?? [])].map((problem) => ({
  ...problem,
  url: `https://leetcode.com/problems/${problem.slug}/`,
  topic,
  pattern: problem.pattern ?? defaultPattern,
  expectedTimeComplexity: problem.time,
  expectedSpaceComplexity: problem.space,
  companies: ["Amazon", "Google", "Meta"],
  hints: [
    `Identify the invariant that makes ${problem.title} manageable.`,
    "Choose a data structure that avoids repeating work.",
    `Use the stated ${problem.pattern ?? defaultPattern} pattern to reach the target complexity.`,
  ],
  commonMistakes: [
    "Missing edge cases such as empty input, duplicate values, or a single element.",
    "Using a brute-force solution when the intended pattern can reuse previous work.",
  ],
  followUps: ["Can you reduce the extra space or handle a streaming input?"],
  relatedProblems: [],
}));

export { DIFFICULTY };
