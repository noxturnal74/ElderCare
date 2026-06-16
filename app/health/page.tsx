import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

export default function HealthPage() {
  const healthData = [
    { id: 1, name: 'Heart Rate', value: '72', unit: 'bpm', trend: 'stable', color: 'text-[#FF3B30]' },
    { id: 2, name: 'Blood Pressure', value: '120/80', unit: 'mmHg', trend: 'good', color: 'text-[#34C759]' },
    { id: 3, name: 'Weight', value: '70', unit: 'kg', trend: 'stable', color: 'text-[#FF9500]' },
    { id: 4, name: 'Temperature', value: '36.6', unit: '°C', trend: 'normal', color: 'text-[#007AFF]' },
  ]

  const recentReadings = [
    { id: 1, name: 'Heart Rate', value: '72', time: '10:30 AM', type: 'heart_rate' },
    { id: 2, name: 'Blood Pressure', value: '120/80', time: '10:30 AM', type: 'blood_pressure' },
    { id: 3, name: 'Weight', value: '70.2', time: 'Yesterday', type: 'weight' },
  ]

  return (
    <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000]">
      <header className="bg-white dark:bg-[#1C1C1E] shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/" className="p-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <svg className="text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </Link>
          <h1 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">Health</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Vitals</h2>
          <div className="grid grid-cols-2 gap-4">
            {healthData.map((item) => (
              <div key={item.id} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className={`text-2xl font-bold mb-1 ${item.color}`}>{item.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{item.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{item.unit}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Recent Readings</h2>
          <div className="space-y-3">
            {recentReadings.map((reading) => (
              <div key={reading.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div>
                  <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">{reading.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reading.time}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#000000] dark:text-[#FFFFFF]">{reading.value}</div>
                  <TrendingUp className="text-gray-400" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Add Reading</h2>
          <div className="space-y-3">
            <select className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]">
              <option>Select Type</option>
              <option>Heart Rate</option>
              <option>Blood Pressure</option>
              <option>Weight</option>
              <option>Temperature</option>
            </select>
            <input type="text" placeholder="Enter value" className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]" />
            <button className="w-full bg-[#007AFF] hover:bg-[#0069D9] text-white font-bold py-4 rounded-xl transition-colors">
              Save Reading
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Health Trends</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#007AFF]">72</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Heart Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#34C759]">120/80</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg BP</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}