import Link from 'next/link'
import { Heart, Pill, Calendar, Phone, Moon, Footprints, Activity, Users, Bell, Clock } from 'lucide-react'
import Image from 'next/image'

export default function ElderCareHome() {
  return (
    <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000]">
      {/* Header */}
      <header className="bg-white dark:bg-[#1C1C1E] shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center">
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">ElderCare</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Digital Companion</p>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="text-[#007AFF]" size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Quick Actions */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/medicine" className="bg-white dark:bg-[#1C1C1E] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#FF3B30] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Pill className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Medicine</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Take your pills</p>
          </Link>

          <Link href="/health" className="bg-white dark:bg-[#1C1C1E] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#FF9500] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Activity className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Health</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Track vitals</p>
          </Link>

          <Link href="/routine" className="bg-white dark:bg-[#1C1C1E] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#34C759] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Footprints className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Routine</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Daily schedule</p>
          </Link>

          <Link href="/emergency" className="bg-white dark:bg-[#1C1C1E] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#FF3B30] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Emergency</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Call for help</p>
          </Link>
        </section>

        {/* Health Summary */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Today's Health Summary</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-[#007AFF]">72</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Heart Rate</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">bpm</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-[#34C759]">120/80</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Blood Pressure</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Normal</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-[#FF9500]">152/70</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Weight</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">kg/cm</div>
            </div>
          </div>
        </section>

        {/* Medication Schedule */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Medication Schedule</h2>
            <Link href="/medicine" className="text-[#007AFF] text-sm font-medium">View All</Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#34C759] flex items-center justify-center">
                <Clock className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Morning Medication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">8:00 AM • 3 pills</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#FF9500] flex items-center justify-center">
                <Clock className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Afternoon Medication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">2:00 PM • 2 pills</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Button */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Emergency</h2>
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#FF3B30] mb-2">Emergency SOS</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Tap to contact emergency services and family</p>
              <button className="w-full bg-[#FF3B30] hover:bg-[#FF2D2D] text-white font-bold py-4 rounded-xl transition-colors">
                EMERGENCY BUTTON
              </button>
            </div>
          </div>
        </section>

        {/* Family Dashboard Link */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-[#007AFF]" size={24} />
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Family Dashboard</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#1C1C1E] bg-[#007AFF] flex items-center justify-center text-white text-xs">
                  F{i}
                </div>
              ))}
            </div>
            <Link href="/family" className="bg-[#007AFF] hover:bg-[#0069D9] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              View Dashboard
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
