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

      {/* For Whom Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Who is it for?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              It's not about perfection — it's about flow.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* DJs */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-violet-500/50 hover:bg-gray-900/70">
              <div className="w-12 h-12 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">DJs</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Preparing sets faster, smarter and more creatively. From club to bedroom, build your perfect mix.
              </p>
            </div>

            {/* Producers */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-cyan-500/50 hover:bg-gray-900/70">
              <div className="w-12 h-12 mb-5 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Producers</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Generating ideas, sketches and inspiration. Break through creative blocks and explore new directions.
              </p>
            </div>

            {/* Music Lovers */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-amber-500/50 hover:bg-gray-900/70">
              <div className="w-12 h-12 mb-5 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Music Lovers</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Discovering new sounds & moods. Curate your perfect collection and explore the depths of electronic music.
              </p>
            </div>

            {/* Beginners */}
            <div className="group relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl transition-all duration-200 hover:border-violet-500/50 hover:bg-gray-900/70">
              <div className="w-12 h-12 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Beginners</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Experimenting without pressure. Learn, explore and create at your own pace. No judgment, just pure creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Why users love it
              </span>
            </h2>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Discover new tracks & hidden gems</h3>
                <p className="text-gray-400 text-sm">Find music that matches your exact vibe and energy level.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Build sets based on mood & energy</h3>
                <p className="text-gray-400 text-sm">Organize tracks by feeling, not just genre. Create the perfect flow.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Generate musical ideas & tracks</h3>
                <p className="text-gray-400 text-sm">AI-powered inspiration when you need it most. Break through blocks.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Intuitive, playful workflows</h3>
                <p className="text-gray-400 text-sm">Designed for creativity, not complexity. Stay in the flow.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Mood & genre filters</h3>
                <p className="text-gray-400 text-sm">Melodic techno, deep house, and everything in between. Find your sound.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Export & share options</h3>
                <p className="text-gray-400 text-sm">Take your sets and ideas anywhere. Share with the community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI-Powered Generation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Generate music and ideas with intelligent AI support. Get creative inspiration on demand.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Set Building Tools</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Powerful tools to structure and organize your DJ sets. Build seamless transitions.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Mood & Genre Filters</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Filter by melodic techno, deep house, and more. Find tracks that match your energy.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Playlist Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Organize your music with smart playlists and session management. Keep everything in sync.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Export & Share</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Export your sets and share them with the community. Take your music anywhere.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Session Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Save your work and continue where you left off. Never lose your creative flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                How it works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Three simple steps to your next set
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-violet-500/10 rounded-full flex items-center justify-center border border-violet-500/20">
                <span className="text-2xl font-bold text-violet-400">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Discover sounds & vibes</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Explore tracks, genres, and moods. Find music that resonates with your creative energy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500/20">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Build your set or idea</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Organize tracks, create transitions, and structure your perfect mix. Let your creativity flow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20">
                <span className="text-2xl font-bold text-amber-400">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Generate, refine & play</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Use AI to generate ideas, refine your work, and bring your vision to life. Then hit play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Events Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Community & Events
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Share sets and ideas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with other creators. Share your sets, get feedback, and discover what others are playing.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Discover what others are playing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Explore sets from the community. Find inspiration and connect with like-minded creators.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Community challenges</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Join challenges, featured DJs, and curated events. Push your creativity to new levels.
              </p>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="w-10 h-10 mb-5 bg-violet-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Events & live sessions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Join live sessions, curated drops, and special events. Be part of the movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                By the numbers
              </span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="text-5xl sm:text-6xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                500+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Genres explored today</h3>
              <p className="text-gray-400 text-sm">From melodic techno to deep house and beyond</p>
            </div>

            <div className="text-center p-8 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="text-5xl sm:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                10K+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Tracks generated</h3>
              <p className="text-gray-400 text-sm">AI-powered creativity in action</p>
            </div>

            <div className="text-center p-8 bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="text-5xl sm:text-6xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent">
                2.5K+
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Sets built by community</h3>
              <p className="text-gray-400 text-sm">Creative minds coming together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                What creators say
              </span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="mb-4">
                <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "This app changed how I prepare for gigs. Building sets has never been this intuitive and fun."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center">
                  <span className="text-violet-400 font-semibold">DJ</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Club DJ</div>
                  <div className="text-xs text-gray-500">Berlin</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="mb-4">
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "The AI generation feature is incredible. It helps me break through creative blocks and explore new directions."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <span className="text-cyan-400 font-semibold">P</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Producer</div>
                  <div className="text-xs text-gray-500">Amsterdam</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="mb-4">
                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                "As a beginner, I love how approachable this is. No pressure, just pure creativity and exploration."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-semibold">M</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Music Explorer</div>
                  <div className="text-xs text-gray-500">Early User</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Your next set starts here.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the community of creators and start building your sound today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button className="px-8 py-3.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg font-medium text-base text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25">
              Open App
            </button>
            <button className="px-8 py-3.5 border border-gray-700 rounded-lg font-medium text-base text-gray-300 transition-all duration-200 hover:border-gray-600 hover:text-white hover:bg-gray-900/50">
              Join the Community
            </button>
            <button className="px-8 py-3.5 border border-gray-700 rounded-lg font-medium text-base text-gray-300 transition-all duration-200 hover:border-gray-600 hover:text-white hover:bg-gray-900/50">
              Get Early Access
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
