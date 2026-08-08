import { Bell, Moon, Search, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { STATUS } from "@/constants";
import { useProblemStore } from "@/store/problemStore";
import { useSettingsStore } from "@/store/settingsStore";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showNotifications, setShowNotifications] = useState(false);
  const problems = useProblemStore((state) => state.problems);
  const theme = useSettingsStore((state) => state.theme);
  const reviewNotifications = useSettingsStore((state) => state.reviewNotifications);
  const reducedMotion = useSettingsStore((state) => state.reducedMotion);
  const updateSettings = useSettingsStore((state) => state.updateSettings);
  const query = searchParams.get("q") ?? "";
  const reviewCount = problems.filter((problem) => problem.status === STATUS.REVIEW).length;

  useEffect(() => {
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);
  }, [theme, reducedMotion]);

  const updateSearch = (value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value) nextParams.set("q", value); else nextParams.delete("q");
    if (location.pathname !== "/problems") navigate(`/problems?${nextParams.toString()}`);
    else setSearchParams(nextParams);
  };

  return <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
    <div className="relative w-96"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} /><input type="text" placeholder="Search problems..." value={query} onChange={(event) => updateSearch(event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2 pl-10 pr-4 text-white outline-none focus:border-sky-500" /></div>
    <div className="flex items-center gap-5">
      <button type="button" onClick={() => updateSettings({ theme: theme === "dark" ? "light" : "dark" })} className="text-slate-400 hover:text-white" title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}</button>
      <div className="relative"><button type="button" onClick={() => setShowNotifications((show) => !show)} className="relative text-slate-400 hover:text-white" title="Notifications"><Bell size={20} />{reviewNotifications && reviewCount > 0 && <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-sky-500 px-1 text-[10px] text-white">{reviewCount}</span>}</button>{showNotifications && <div className="absolute right-0 top-8 z-50 w-72 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-xl"><p className="font-medium text-white">Notifications</p><p className="mt-2 text-sm text-slate-400">{reviewNotifications ? reviewCount ? `${reviewCount} problem${reviewCount === 1 ? "" : "s"} ready for review.` : "You are all caught up." : "Review notifications are muted in Settings."}</p></div>}</div>
    </div>
  </header>;
};

export default Navbar;
