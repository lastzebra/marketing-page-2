export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent animate-gradient">
              Find Your Vibe.
            </span>
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '0.5s' }}>
              Build Sets.
            </span>
            <span className="block mt-2 bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '1s' }}>
              Create Sound.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            A playful music app for DJs and sound explorers —<br className="hidden sm:block" />
            discover tracks, build sets and generate your own music.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            {/* Primary CTA */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full font-semibold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              <span className="relative z-10">Open the App</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Secondary CTA */}
            <button className="group px-8 py-4 border-2 border-violet-500/50 rounded-full font-semibold text-lg text-violet-300 transition-all duration-300 hover:border-violet-400 hover:text-violet-200 hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Decorative Elements - Sound Wave Visual */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center items-end gap-1 h-16 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-violet-500 to-cyan-500 rounded-t-full animate-pulse"
              style={{
                height: `${Math.random() * 60 + 20}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1 + Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
