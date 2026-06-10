import { NavLink } from "react-router-dom";

export default function CyberDashboardLayout({ children }) {

const navItems = [
  { path: "/home", label: "🏠 Home" },
  { label: "🛡 Admin Panel", path: "/admin"},
  { path: "/detection", label: "🔍 Detection Center" },
  { path: "/report", label: "🚨 Report Scam" },
  { path: "/legal-guide", label: "⚖️ Legal Guidance" },
  { path: "/history", label: "📜 Complaint History" },
  { path: "/analytics", label: "📊 Scam Analytics" },
];

  return (
    <div className="flex h-screen bg-[#050b18] text-white">

      {/* SIDEBAR */}
      <aside className="w-72 bg-black/40 backdrop-blur-2xl border-r border-cyan-500/20 p-4">

        {/* LOGO */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-cyan-300">
            🛡️ Cyber Intelligence
          </h1>
          <p className="text-xs text-gray-400">
            Command Dashboard
          </p>
        </div>

        {/* STATUS */}
        <div className="mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
          <span className="text-green-300 text-xs">
            SYSTEM ACTIVE
          </span>
        </div>

        {/* NAV ITEMS */}
        <nav className="flex flex-col gap-2">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2 rounded-lg
                transition-all duration-300 border

                ${
                  isActive
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-lg shadow-cyan-500/20"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-400/40"
                }
              `}
            >
              <span>{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}

        </nav>

      </aside>

      {/* MAIN DASHBOARD */}
      <main className="flex-1 p-6 overflow-y-auto">

        {/* TOP HEADER */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-cyan-300">
            Cyber Command Dashboard
          </h2>

          <div className="text-xs text-gray-400">
            LIVE MONITORING ACTIVE
          </div>

        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT PANEL */}
          <div className="col-span-2 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
            {children}
          </div>

          {/* RIGHT PANEL - “Netflix style cards” */}
          <div className="flex flex-col gap-4">

           <div className="'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 rounded-xl border border-cyan-400/20">
              <h3 className="text-cyan-300 font-bold">🧠 AI Threat Scan</h3>
              <p className="text-xs text-gray-300">
                Monitoring cyber anomalies in real-time
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-pink-300 font-bold">🚨 Active Cases</h3>
              <p className="text-xs text-gray-400">
                Live incident tracking panel
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h3 className="text-green-300 font-bold">📡 Network Status</h3>
              <p className="text-xs text-gray-400">
                All systems operational
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}