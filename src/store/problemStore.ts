import { create } from "zustand";
import { persist } from "zustand/middleware";

import { seedProblems } from "@/data/seed";
import { REVIEW_INTERVALS } from "@/constants/reviewIntervals";

import type { Problem } from "@/types/problem";
import type { Difficulty, Status } from "@/constants";

export type Activity = {
  date: string;
  type: "solve" | "review";
  xp: number;
};

interface ProblemStore {
  revealedHints: Record<string, number>;
  problems: Problem[];
  activity: Activity[];

  selectedProblemId: string | null;

  setProblems: (problems: Problem[]) => void;

  selectProblem: (id: string | null) => void;

  updateConfidence: (
    id: string,
    confidence: 1 | 2 | 3 | 4 | 5
  ) => void;

  updateStatus: (
    id: string,
    status: Status
  ) => void;

  updateDifficulty: (
    id: string,
    difficulty: Difficulty
  ) => void;

  updateNotes: (
    id: string,
    notes: string
  ) => void;

  toggleCompleted: (id: string) => void;

  completeReview: (id: string) => void;
}

export const useProblemStore = create<ProblemStore>()(persist((set) => ({
  revealedHints: {},

  problems: seedProblems,
  activity: [],

  selectedProblemId: null,

  setProblems: (problems) =>
    set({
      problems,
    }),

  selectProblem: (id) =>
    set({
      selectedProblemId: id,
    }),

  updateConfidence: (id, confidence) =>
    set((state) => ({
      problems: state.problems.map((problem) =>
        problem.id === id
          ? {
              ...problem,
              confidence,
              updatedAt: new Date().toISOString(),
            }
          : problem
      ),
    })),

  updateStatus: (id, status) =>
    set((state) => ({
      ...(() => {
        const current = state.problems.find((problem) => problem.id === id);
        const earnedXp = status === "solved" && current?.status !== "solved" ? current?.difficulty === "Hard" ? 50 : current?.difficulty === "Medium" ? 30 : 20 : 0;
        return {
          activity: earnedXp ? [...state.activity, { date: new Date().toISOString(), type: "solve" as const, xp: earnedXp }].slice(-365) : state.activity,
          problems: state.problems.map((problem) => problem.id === id ? { ...problem, status, completed: status === "solved", updatedAt: new Date().toISOString() } : problem),
        };
      })(),
    })),

  updateDifficulty: (id, difficulty) =>
    set((state) => ({
      problems: state.problems.map((problem) =>
        problem.id === id
          ? {
              ...problem,
              difficulty,
              updatedAt: new Date().toISOString(),
            }
          : problem
      ),
    })),

  updateNotes: (id, notes) =>
    set((state) => ({
      problems: state.problems.map((problem) =>
        problem.id === id
          ? {
              ...problem,
              notes,
              updatedAt: new Date().toISOString(),
            }
          : problem
      ),
    })),

  toggleCompleted: (id) =>
    set((state) => ({
      problems: state.problems.map((problem) =>
        problem.id === id
          ? {
              ...problem,
              completed: !problem.completed,
              updatedAt: new Date().toISOString(),
            }
          : problem
      ),
    })),

  completeReview: (id) =>
    set((state) => {
      const now = new Date();
      const intervals = Object.values(REVIEW_INTERVALS);
      return {
        activity: [...state.activity, { date: now.toISOString(), type: "review" as const, xp: 10 }].slice(-365),
        problems: state.problems.map((problem) => {
          if (problem.id !== id) return problem;
          const attempt = problem.attempts + 1;
          const nextReview = new Date(now);
          nextReview.setDate(now.getDate() + (intervals[Math.min(attempt - 1, intervals.length - 1)] ?? 30));
          return { ...problem, status: "solved", completed: true, attempts: attempt, lastReviewed: now.toISOString(), nextReview: nextReview.toISOString(), updatedAt: now.toISOString() };
        }),
      };
    }),
}), {
  name: "dsa-tracker-problems",
  partialize: (state) => ({ problems: state.problems, activity: state.activity }),
  merge: (persistedState, currentState) => {
    const persisted = persistedState as Partial<ProblemStore>;
    const savedProblems = new Map((persisted.problems ?? []).map((problem) => [problem.slug, problem]));

    return {
      ...currentState,
      ...persisted,
      problems: currentState.problems.map((problem) => ({
        ...problem,
        ...savedProblems.get(problem.slug),
      })),
    };
  },
}));
