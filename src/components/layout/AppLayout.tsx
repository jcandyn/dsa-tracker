import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import GamificationCelebration from "../common/GamificationCelebration";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
      <GamificationCelebration />
    </div>
  );
};

export default AppLayout;
