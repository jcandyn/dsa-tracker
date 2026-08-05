import type { ProblemTemplate } from "@/types/problemTemplate";
import { DIFFICULTY, PATTERNS, TOPICS } from "@/constants";

const hashingProblem = (
  problem: Omit<ProblemTemplate, "topic" | "pattern"> & {
    pattern?: ProblemTemplate["pattern"];
  },
): ProblemTemplate => ({
  ...problem,
  topic: TOPICS.HASHING,
  pattern: problem.pattern ?? PATTERNS.HASH_MAP,
});

export const hashing: ProblemTemplate[] = [
  hashingProblem({
    title: "Ransom Note", slug: "ransom-note", url: "https://leetcode.com/problems/ransom-note/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(m + n)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Meta"], tags: ["Hash Table", "String", "Counting"],
    hints: ["Count the letters available in the magazine.", "Consume one count for each ransom-note letter."],
    commonMistakes: ["Checking only whether a letter exists, rather than how many times it occurs."],
    followUps: ["How would this change for arbitrary Unicode characters?"], relatedProblems: ["Valid Anagram", "Find the Difference"],
  }),
  hashingProblem({
    title: "Isomorphic Strings", slug: "isomorphic-strings", url: "https://leetcode.com/problems/isomorphic-strings/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Google"], tags: ["Hash Table", "String"],
    hints: ["Each source character must always map to the same target character.", "The mapping must also be one-to-one."],
    commonMistakes: ["Validating only one direction of the mapping."],
    followUps: ["Can an array replace the maps for ASCII input?"], relatedProblems: ["Word Pattern", "Valid Anagram"],
  }),
  hashingProblem({
    title: "Word Pattern", slug: "word-pattern", url: "https://leetcode.com/problems/word-pattern/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(n)",
    companies: ["Google", "Meta"], tags: ["Hash Table", "String"],
    hints: ["Split the sentence into words first.", "Track mappings in both directions."],
    commonMistakes: ["Forgetting to compare the number of words with the pattern length."],
    followUps: ["How is this related to isomorphic strings?"], relatedProblems: ["Isomorphic Strings", "Ransom Note"],
  }),
  hashingProblem({
    title: "Happy Number", slug: "happy-number", url: "https://leetcode.com/problems/happy-number/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(log n)", expectedSpaceComplexity: "O(log n)",
    companies: ["Amazon", "Microsoft"], tags: ["Hash Table", "Math", "Cycle Detection"], pattern: PATTERNS.HASH_SET,
    hints: ["Repeated sums either reach one or enter a cycle.", "Store previously seen sums."],
    commonMistakes: ["Looping forever when the number enters a cycle."],
    followUps: ["Can Floyd's cycle detection reduce the space to O(1)?"], relatedProblems: ["Linked List Cycle", "Add Digits"],
  }),
  hashingProblem({
    title: "Contains Duplicate II", slug: "contains-duplicate-ii", url: "https://leetcode.com/problems/contains-duplicate-ii/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(n)",
    companies: ["Amazon", "Google"], tags: ["Array", "Hash Table", "Sliding Window"],
    hints: ["Remember the most recent index of each value.", "Compare the current index with that stored index."],
    commonMistakes: ["Checking duplicate values without enforcing the distance constraint."],
    followUps: ["Can you use a fixed-size sliding window instead?"], relatedProblems: ["Contains Duplicate", "Longest Substring Without Repeating Characters"],
  }),
  hashingProblem({
    title: "Design HashMap", slug: "design-hashmap", url: "https://leetcode.com/problems/design-hashmap/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(1) average", expectedSpaceComplexity: "O(n)",
    companies: ["Amazon", "Google"], tags: ["Hash Table", "Design"],
    hints: ["Map each key to a bucket with a hash function.", "Resolve collisions within that bucket."],
    commonMistakes: ["Overwriting an existing key instead of updating its value."],
    followUps: ["When should a hash table resize?"], relatedProblems: ["Design HashSet", "LRU Cache"],
  }),
  hashingProblem({
    title: "Insert Delete GetRandom O(1)", slug: "insert-delete-getrandom-o1", url: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
    difficulty: DIFFICULTY.MEDIUM, expectedTimeComplexity: "O(1) average", expectedSpaceComplexity: "O(n)",
    companies: ["Amazon", "Meta", "Google"], tags: ["Array", "Hash Table", "Design"],
    hints: ["An array supports uniform random selection.", "A value-to-index map makes lookup fast.", "On deletion, swap with the final array item."],
    commonMistakes: ["Removing from the middle of the array, which is O(n)."],
    followUps: ["How would you support duplicates?"], relatedProblems: ["Random Pick Index", "LRU Cache"],
  }),
  hashingProblem({
    title: "Longest Consecutive Sequence", slug: "longest-consecutive-sequence-hashing", url: "https://leetcode.com/problems/longest-consecutive-sequence/",
    difficulty: DIFFICULTY.MEDIUM, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(n)",
    companies: ["Amazon", "Google", "Meta"], tags: ["Array", "Hash Table", "Hash Set"], pattern: PATTERNS.HASH_SET,
    hints: ["Only expand sequences from values whose predecessor is absent.", "Use a set for constant-time membership checks."],
    commonMistakes: ["Starting a scan from every value and repeatedly counting the same sequence."],
    followUps: ["Why is the total work still linear?"], relatedProblems: ["Contains Duplicate", "Longest Increasing Subsequence"],
  }),
];
