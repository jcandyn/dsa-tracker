import type { ProblemTemplate } from "@/types/problemTemplate";
import { DIFFICULTY, PATTERNS, TOPICS } from "@/constants";

const twoPointerProblem = (
  problem: Omit<ProblemTemplate, "topic" | "pattern"> & {
    pattern?: ProblemTemplate["pattern"];
  },
): ProblemTemplate => ({
  ...problem,
  topic: TOPICS.TWO_POINTERS,
  pattern: problem.pattern ?? PATTERNS.TWO_POINTERS,
});

export const twoPointers: ProblemTemplate[] = [
  twoPointerProblem({
    title: "Valid Palindrome", slug: "valid-palindrome", url: "https://leetcode.com/problems/valid-palindrome/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Meta", "Microsoft"], tags: ["String", "Two Pointers"],
    hints: ["Use one pointer at each end of the string.", "Skip characters that are not letters or digits."],
    commonMistakes: ["Comparing punctuation or casing when the problem says to ignore them."],
    followUps: ["Can you avoid creating a cleaned copy of the string?"], relatedProblems: ["Valid Palindrome II", "Reverse String"],
  }),
  twoPointerProblem({
    title: "Is Subsequence", slug: "is-subsequence", url: "https://leetcode.com/problems/is-subsequence/",
    difficulty: DIFFICULTY.EASY, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Google"], tags: ["String", "Two Pointers", "Dynamic Programming"],
    hints: ["Advance through the target string once.", "Advance the subsequence pointer only after a match."],
    commonMistakes: ["Requiring matched characters to be adjacent."],
    followUps: ["How would you answer many subsequence queries against one target?"], relatedProblems: ["Longest Common Subsequence", "Implement strStr()"],
  }),
  twoPointerProblem({
    title: "Two Sum II - Input Array Is Sorted", slug: "two-sum-ii-input-array-is-sorted", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    difficulty: DIFFICULTY.MEDIUM, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Google", "Meta"], tags: ["Array", "Two Pointers", "Binary Search"],
    hints: ["Put one pointer at each end.", "Use the sorted order to decide which pointer to move."],
    commonMistakes: ["Returning zero-indexed positions when the result is one-indexed."],
    followUps: ["What changes if the array is not sorted?"], relatedProblems: ["Two Sum", "3Sum"],
  }),
  twoPointerProblem({
    title: "Container With Most Water", slug: "container-with-most-water", url: "https://leetcode.com/problems/container-with-most-water/",
    difficulty: DIFFICULTY.MEDIUM, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Google", "Meta"], tags: ["Array", "Two Pointers", "Greedy"],
    hints: ["Area is bounded by the shorter wall.", "Move the pointer at the shorter wall inward."],
    commonMistakes: ["Moving the taller wall, which cannot improve the limiting height."],
    followUps: ["Why is it safe to discard the shorter boundary?"], relatedProblems: ["Trapping Rain Water", "Largest Rectangle in Histogram"],
  }),
  twoPointerProblem({
    title: "3Sum", slug: "3sum", url: "https://leetcode.com/problems/3sum/",
    difficulty: DIFFICULTY.MEDIUM, expectedTimeComplexity: "O(n^2)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Meta", "Microsoft"], tags: ["Array", "Two Pointers", "Sorting"],
    hints: ["Sort the array first.", "Fix one number and solve a two-sum problem to its right.", "Skip duplicate fixed values and duplicate pointer values."],
    commonMistakes: ["Returning duplicate triplets."],
    followUps: ["How does this generalize to k-sum?"], relatedProblems: ["Two Sum II", "4Sum"],
  }),
  twoPointerProblem({
    title: "Trapping Rain Water", slug: "trapping-rain-water", url: "https://leetcode.com/problems/trapping-rain-water/",
    difficulty: DIFFICULTY.HARD, expectedTimeComplexity: "O(n)", expectedSpaceComplexity: "O(1)",
    companies: ["Amazon", "Google", "Meta"], tags: ["Array", "Two Pointers", "Dynamic Programming"],
    hints: ["Water at an index is limited by its highest boundary on each side.", "Track the best left and right boundaries while moving inward.", "Process the side with the lower current boundary."],
    commonMistakes: ["Using the current bar height instead of the maximum seen from that side."],
    followUps: ["Can you solve it with a monotonic stack?"], relatedProblems: ["Container With Most Water", "Largest Rectangle in Histogram"],
  }),
];
