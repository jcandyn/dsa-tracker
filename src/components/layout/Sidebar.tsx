import {
  LayoutDashboard,
  Code2,
  Brain,
  BarChart3,
  Award,
  Settings,
} from "lucide-react";

import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-sidebar text-sidebar-foreground">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-white">
          DSA Tracker
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Interview Prep
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        <NavItem to="/" icon={LayoutDashboard}>
          Dashboard
        </NavItem>

        <NavItem to="/problems" icon={Code2}>
          Problems
        </NavItem>

        <NavItem to="/review" icon={Brain}>
          Review
        </NavItem>

        <NavItem to="/stats" icon={BarChart3}>
          Statistics
        </NavItem>

        <NavItem to="/badges" icon={Award}>
          Badges
        </NavItem>

        <NavItem to="/settings" icon={Settings}>
          Settings
        </NavItem>
      </nav>

      <div className="border-t border-slate-800 p-4 text-center text-xs text-slate-500">
        Version 1.0
      </div>
    </aside>
  );
};

export default Sidebar;
