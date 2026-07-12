export const PATTERNS = {
  HASH_MAP: "Hash Map",
  HASH_SET: "Hash Set",
  SLIDING_WINDOW: "Sliding Window",
  TWO_POINTERS: "Two Pointers",
  FAST_SLOW_POINTER: "Fast & Slow Pointer",
  PREFIX_SUM: "Prefix Sum",
  BINARY_SEARCH: "Binary Search",
  DFS: "Depth First Search",
  BFS: "Breadth First Search",
  RECURSION: "Recursion",
  BACKTRACKING: "Backtracking",
  DP: "Dynamic Programming",
  GREEDY: "Greedy",
  TOPOLOGICAL_SORT: "Topological Sort",
  UNION_FIND: "Union Find",
  MONOTONIC_STACK: "Monotonic Stack",
  SORTING: "Sorting",
  HEAP: "Heap",
} as const;

export type Pattern =
  (typeof PATTERNS)[keyof typeof PATTERNS];