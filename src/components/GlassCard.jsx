export default function GlassCard({ children }) {
  return (
    <div
      className="
      bg-slate-900/70
      backdrop-blur-xl
      border
      border-cyan-500/20
      rounded-3xl
      shadow-2xl
      shadow-cyan-500/10
      p-8
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:-translate-y-1
      "
    >
      {children}
    </div>
  );
}
