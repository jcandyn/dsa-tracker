import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const NavItem = ({ to, icon: Icon, children }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200",
          isActive
            ? "bg-sky-500 text-slate-950 dark:text-white shadow"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        )
      }
    >
      <Icon size={20} />
      <span>{children}</span>
    </NavLink>
  );
};

export default NavItem;
