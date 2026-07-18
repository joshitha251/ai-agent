import { Search, Bell } from "lucide-react";

export default function Header({ title }) {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 sticky top-0 bg-background/95 backdrop-blur z-10">
      <h1 className="text-lg font-semibold text-white">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="text"
            placeholder="Search..."
            className="bg-surface border border-border rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-zinc-500 w-64 focus:border-primary/60 transition-colors"
          />
        </div>

        <button className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
          <Bell size={16} />
        </button>

        <div className="w-9 h-9 rounded-full bg-primary/20 border border-border flex items-center justify-center text-primary text-sm font-semibold">
          PA
        </div>
      </div>
    </header>
  );
}
