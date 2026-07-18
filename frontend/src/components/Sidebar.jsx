import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Settings, Bot } from "lucide-react";

const navItems = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Leads", to: "/leads", icon: Users },
  { label: "Settings", to: "/settings", icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col border-r border-border bg-background h-screen sticky top-0">
      <div className="flex items-center gap-2 px-6 h-16 border-b border-border">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Bot size={18} className="text-primary" />
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">
          PrimeAgents
        </span>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-surface text-white border border-border"
                  : "text-zinc-400 hover:text-white hover:bg-surface/60"
              ].join(" ")
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-border">
        <p className="text-xs text-zinc-500">PrimeAgents v1.0</p>
      </div>
    </aside>
  );
}
