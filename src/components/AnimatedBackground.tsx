export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
        <div className="absolute inset-0 rounded-full bg-white/5 animate-[spin_25s_linear_infinite]"></div>
        <div className="absolute inset-20 rounded-full bg-white/5 animate-[spin_20s_linear_infinite_reverse]"></div>
        <div className="absolute inset-40 rounded-full bg-white/5 animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute inset-60 rounded-full bg-white/10 animate-[spin_10s_linear_infinite_reverse]"></div>
      </div>
    </div>
  )
}
