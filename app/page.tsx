export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Welcome to Next.js 16 🚀
          </h1>
          <p className="text-2xl text-gray-600">
            React 19 + Tailwind CSS 4.2 + TypeScript
          </p>
        </div>
        <div className="flex gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
        <div className="mt-16 max-w-2xl">
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Stack</h2>
            <ul className="space-y-2 text-left">
              <li className="text-gray-700">✅ Next.js 16.2.0</li>
              <li className="text-gray-700">✅ React 19.2.4</li>
              <li className="text-gray-700">✅ Tailwind CSS 4.2.0</li>
              <li className="text-gray-700">✅ TypeScript 5.7.3</li>
              <li className="text-gray-700">✅ shadcn/ui Components</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
