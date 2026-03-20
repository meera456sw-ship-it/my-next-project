export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to Next.js 16! 🚀
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          React 19 + Tailwind CSS 4.2 + TypeScript
        </p>
        <div className="pt-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}
