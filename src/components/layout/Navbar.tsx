import { Bell, Moon, Search, UserCircle2 } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 -translate-x-0 text-slate-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search problems..."
          className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2 pl-10 pr-4 text-white outline-none focus:border-sky-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-slate-400 hover:text-white">
          <Moon size={20} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <Bell size={20} />
        </button>

        <button className="text-slate-400 hover:text-white">
          <UserCircle2 size={28} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;