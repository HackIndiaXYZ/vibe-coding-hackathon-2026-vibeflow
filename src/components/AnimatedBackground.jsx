export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden 'bg-gradient-to-br from-slate-950 via-slate-900 to-black">

      {/* Cyan Orb */}
      <div
        className="
        absolute
        top-20
        left-10
        w-96
        h-96
        bg-cyan-500/20
        rounded-full
        blur-3xl
        animate-pulse
        "
      ></div>

      {/* Purple Orb */}
      <div
        className="
        absolute
        bottom-10
        right-10
        w-96
        h-96
        bg-purple-500/20
        rounded-full
        blur-3xl
        animate-pulse
        "
      ></div>

      {/* Blue Orb */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        'w-[500px]
        'h-[500px]
        bg-blue-500/10
        rounded-full
        blur-3xl
        animate-pulse
        "
      ></div>

    </div>
  );
}