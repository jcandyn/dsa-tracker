import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import DashboardPage from "../features/dashboard/DashboardPage";
import ProblemsPage from "../features/problems/ProblemsPage";
import ReviewPage from "../features/review/ReviewPage";
import StatisticsPage from "../features/stats/StatisticsPage";
import BadgesPage from "../features/badges/BadgesPage";
import SettingsPage from "../features/settings/SettingsPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/problems",
        element: <ProblemsPage />,
      },
      {
        path: "/review",
        element: <ReviewPage />,
      },
      {
        path: "/stats",
        element: <StatisticsPage />,
      },
      {
        path: "/badges",
        element: <BadgesPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);