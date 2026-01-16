export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10 sm:space-y-12">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Find Your Vibe.
            </span>
            <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
              Build Sets.
            </span>
            <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Create Sound.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
            A playful music app for DJs and sound explorers —<br className="hidden sm:block" />
            discover tracks, build sets and generate your own music.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-6">
            {/* Primary CTA */}
            <button className="group relative px-8 py-3.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-medium text-base text-white overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25">
              <span className="relative z-10">Open the App</span>
            </button>

            {/* Secondary CTA */}
            <button className="group px-8 py-3.5 border border-gray-700 rounded-lg font-medium text-base text-gray-300 transition-all duration-200 hover:border-gray-600 hover:text-white hover:bg-gray-900/50">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                What is this app?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A creative space where music discovery meets flow state.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1: Discover */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-gray-700 hover:bg-gray-900/70">
              <div className="w-10 h-10 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Discover New Music</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Find hidden gems and tracks that match your vibe. Explore genres, moods, and energy levels that resonate with your creative flow.
              </p>
            </div>

            {/* Feature 2: Build Sets */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-gray-700 hover:bg-gray-900/70">
              <div className="w-10 h-10 mb-5 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Curate & Structure DJ Sets</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Build sets faster and smarter. Organize tracks by mood, energy, and genre. Create seamless transitions that keep the dance floor moving.
              </p>
            </div>

            {/* Feature 3: Generate Tracks */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-gray-700 hover:bg-gray-900/70">
              <div className="w-10 h-10 mb-5 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Generate Tracks with AI</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Get creative inspiration when you need it. Generate musical ideas, sketches, and tracks with AI support. Break through creative blocks and explore new directions.
              </p>
            </div>

            {/* Feature 4: Stay Inspired */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-gray-700 hover:bg-gray-900/70">
              <div className="w-10 h-10 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Stay Inspired Without Losing Flow</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Designed for creativity, not complexity. Intuitive workflows that keep you in the zone. No interruptions, just pure creative energy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
