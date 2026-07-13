import { create } from "zustand";

import { seedProblems } from "@/data/seed";

import type { Problem } from "@/types/problem";
import type { Difficulty, Status } from "@/constants";

interface ProblemStore {
  revealedHints: Record<string, number>;
  problems: Problem[];

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
}

export const useProblemStore = create<ProblemStore>((set) => ({
  problems: seedProblems,

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
      problems: state.problems.map((problem) =>
        problem.id === id
          ? {
              ...problem,
              status,
              updatedAt: new Date().toISOString(),
            }
          : problem
      ),
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
}));