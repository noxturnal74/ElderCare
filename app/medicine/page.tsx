import Link from 'next/link'
import { Pill, Activity, Heart, TrendingUp } from 'lucide-react'

export default function MedicinePage() {
  const medications = [
    { id: 1, name: 'Lisinopril', dosage: '10mg', time: '8:00 AM', status: 'taken' },
    { id: 2, name: 'Metformin', dosage: '500mg', time: '8:00 AM', status: 'taken' },
    { id: 3, name: 'Atorvastatin', dosage: '20mg', time: '8:00 PM', status: 'pending' },
    { id: 4, name: 'Vitamin D', dosage: '2000 IU', time: '8:00 PM', status: 'pending' },
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
          <h1 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">Medication</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">
              {medications.filter(m => m.status === 'taken').length}/{medications.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Medications Taken Today</div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Add Medication</h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Medication name"
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Dosage"
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]"
              />
              <input
                type="text"
                placeholder="Time"
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF]"
              />
            </div>
            <button className="w-full bg-[#007AFF] hover:bg-[#0069D9] text-white font-bold py-4 rounded-xl transition-colors">
              Add Medication
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Current Medications</h2>
          <div className="space-y-3">
            {medications.map((med) => (
              <div key={med.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Pill className="text-[#007AFF]" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">{med.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{med.dosage} • {med.time}</p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${med.status === 'taken' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  {med.status === 'taken' ? (
                    <svg className="text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </main>
    </div>
  )
}
