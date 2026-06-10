import { NavLink } from "react-router-dom";

export default function Navbar() {

  const navItems = [
  { path: "/", label: "🏠 Home" },
  { path: "/report", label: "🚨 Report Scam" },
  { path: "/detection", label: "🔍 Detection Center" },
  { path: "/legal", label: "⚖️ Legal Guide" },
  { path: "/history", label: "📜 Complaint History" },
  { path: "/analytics", label: "📊 Scam Analytics" },
  { path: "/admin", label: "🛡 Admin Panel" }
];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-2xl border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP BAR */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="text-4xl animate-pulse drop-shadow-[0_0_10px_cyan]">
              🛡️
            </div>

            <div>
              <h1 className="text-white font-bold text-xl tracking-wide">
                Cyber Shield AI
              </h1>

              <p className="text-cyan-300 text-xs">
                AI Cyber Crime Command System
              </p>
            </div>
          </div>

          {/* STATUS INDICATOR */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-400/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
            <span className="text-green-300 text-xs font-medium">
              AI SYSTEM ONLINE
            </span>
          </div>

        </div>

        {/* NAVIGATION */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                px-4 py-2
                whitespace-nowrap
                rounded-xl
                border
                transition-all
                duration-300
                font-medium

                ${
                  isActive
                    ? `
                      bg-cyan-400/20
                      border-cyan-300
                      text-cyan-200
                      shadow-lg
                      shadow-cyan-500/30
                      scale-105
                      animate-pulse
                    `
                    : `
                      bg-white/5
                      border-white/10
                      text-gray-300
                      hover:bg-cyan-500/10
                      hover:border-cyan-400/40
                      hover:text-cyan-300
                      hover:scale-105
                    `
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}

        </div>

      </div>

      {/* GLOW LINE EFFECT */}
      <div className="'h-[2px] w-full 'bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>

    </nav>
  );
}