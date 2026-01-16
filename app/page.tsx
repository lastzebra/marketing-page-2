export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 flex items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-orange-400 drop-shadow-lg">
          Hallo Züri! 
        </h1>
        <p className="text-xl text-orange-300 font-medium">
          Willkommen auf meiner Webseite!
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <div className="w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="w-16 h-16 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-16 h-16 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </main>
  )
}
