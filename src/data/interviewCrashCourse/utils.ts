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

export const createProblemSet = (
  topic: Topic,
  defaultPattern: Pattern,
  problems: CourseProblem[],
): ProblemTemplate[] => [...problems, ...(supplementalProblems[topic.id] ?? [])].map((problem) => ({
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
