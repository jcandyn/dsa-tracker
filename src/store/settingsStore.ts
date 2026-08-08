import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

interface SettingsState {
  theme: Theme;
  dailySolveGoal: number;
  dailyReviewGoal: number;
  reviewIntervals: number[];
  reviewNotifications: boolean;
  reducedMotion: boolean;
  compactTable: boolean;
  updateSettings: (settings: Partial<Omit<SettingsState, "updateSettings">>) => void;
}

export const useSettingsStore = create<SettingsState>()(persist((set) => ({
  theme: "system",
  dailySolveGoal: 2,
  dailyReviewGoal: 3,
  reviewIntervals: [1, 3, 7, 14, 30],
  reviewNotifications: true,
  reducedMotion: false,
  compactTable: false,
  updateSettings: (settings) => set(settings),
}), { name: "dsa-tracker-settings" }));
