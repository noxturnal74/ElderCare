import Link from 'next/link'
import { Moon, Clock, Activity, Coffee } from 'lucide-react'

export default function RoutinePage() {
  const routineItems = [
    { id: 1, title: 'Morning Meditation', time: '7:00 AM', emoji: '🧘', completed: true },
    { id: 2, title: 'Breakfast', time: '8:00 AM', emoji: '🍳', completed: true },
    { id: 3, title: 'Medication', time: '8:30 AM', emoji: '💊', completed: true },
    { id: 4, title: 'Walk', time: '10:00 AM', emoji: '🚶', completed: false },
    { id: 5, title: 'Lunch', time: '12:00 PM', emoji: '🍽️', completed: false },
    { id: 6, title: 'Nap', time: '2:00 PM', emoji: '😴', completed: false },
    { id: 7, title: 'Dinner', time: '6:00 PM', emoji: '🍲', completed: false },
    { id: 8, title: 'Evening Walk', time: '7:00 PM', emoji: '🌇', completed: false },
    { id: 9, title: 'Bedtime', time: '9:30 PM', emoji: '🌙', completed: false },
  ]

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const dayScores = [85, 90, 78, 95, 60, 100, 70]

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
          <h1 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">Daily Routine</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="text-center mb-6">
            <div className="text-2xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-2">
              {routineItems.filter(i => i.completed).length}/{routineItems.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Tasks Completed Today</div>
          </div>

          <div className="space-y-3">
            {routineItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${item.completed ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-800'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${item.completed ? 'bg-green-100 dark:bg-green-900/40' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${item.completed ? 'text-green-700 dark:text-green-400 line-through' : 'text-[#000000] dark:text-[#FFFFFF]'}`}>
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} />
                    {item.time}
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.completed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  {item.completed ? (
                    <svg className="text-green-600 dark:text-green-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Add Routine Item</h2>
          <div className="space-y-3">
            <input type="text" placeholder="Activity name" className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]" />
            <input type="time" className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]" />
            <select className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]">
              <option>Select Type</option>
              <option>Medication</option>
              <option>Meal</option>
              <option>Exercise</option>
              <option>Appointment</option>
              <option>Rest</option>
            </select>
            <button className="w-full bg-[#007AFF] hover:bg-[#0069D9] text-white font-bold py-4 rounded-xl transition-colors">
              Add Routine Item
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Weekly Summary</h2>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, i) => (
              <div
                key={`${day}-${i}`}
                className={`text-center py-3 rounded-xl ${dayScores[i] >= 80 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-800'}`}
              >
                <div className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">{day}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{dayScores[i]}%</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}