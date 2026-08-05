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
  BUCKET_SORT: "Bucket Sort",
  PREFIX_SUFFIX: "Prefix & Suffix",
  STRING_ENCODING: "String Encoding",
  STRING: "String",
  BOYER_MOORE: "Boyer-Moore Voting",
  MATH: "Math",
} as const;

export type Pattern =
  (typeof PATTERNS)[keyof typeof PATTERNS];
