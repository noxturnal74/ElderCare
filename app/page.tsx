'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Pill, Phone, Footprints, Activity, Users, Bell, Clock, ChevronRight, Eye, ShieldAlert, Sparkles, Check } from 'lucide-react'

export default function ElderCareHome() {
  const [elderMode, setElderMode] = useState(false)
  const [sosActive, setSosActive] = useState(false)
  const [pillTaken, setPillTaken] = useState({ morning: true, afternoon: false })

  const togglePill = (time: 'morning' | 'afternoon') => {
    setPillTaken(prev => ({ ...prev, [time]: !prev[time] }))
  }

  const triggerSOS = () => {
    setSosActive(true)
    setTimeout(() => {
      setSosActive(false)
      alert("SOS Alert dispatched to emergency contacts & caregivers!")
    }, 1500)
  }

  return (
    <div className={`min-h-screen bg-[#F2F2F7] dark:bg-[#000000] transition-all duration-300 ${elderMode ? 'text-lg' : 'text-base'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-[#1C1C1E] border-b border-gray-200/50 dark:border-gray-800/50 p-4 sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-[#1C1C1E]/80">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF2D55] to-[#FF3B30] flex items-center justify-center shadow-lg shadow-red-500/10">
              <Heart className="text-white animate-pulse" size={28} />
            </div>
            <div>
              <h1 className={`font-black tracking-tight text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-3xl' : 'text-2xl'}`}>ElderCare</h1>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Premium Companion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setElderMode(!elderMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                elderMode 
                  ? 'bg-black dark:bg-white text-white dark:text-black border-transparent font-bold' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50'
              }`}
            >
              <Eye size={18} />
              <span>{elderMode ? 'Normal Mode' : 'Elder Mode'}</span>
            </button>
            <button className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Bell className="text-gray-600 dark:text-gray-300" size={22} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FF3B30] rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Elder Mode Banner */}
        {elderMode && (
          <div className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white p-5 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
              <Sparkles className="animate-spin-slow" /> Elder Mode is Active
            </h2>
            <p className="text-white/95 text-base leading-relaxed">
              Text size is enlarged, screen contrast is enhanced, and touch targets are expanded for your comfort and ease of use.
            </p>
          </div>
        )}

        {/* SOS Emergency Button - Cupertino Style Redesign */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none p-6 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="text-[#FF3B30]" size={24} />
            <h2 className={`font-bold text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-2xl' : 'text-lg'}`}>Emergency Assistance</h2>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30">
            <div className="text-center space-y-4">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Need immediate help? Pressing the button below notifies caregivers and shares your GPS location.
              </p>
              <button 
                onClick={triggerSOS}
                disabled={sosActive}
                className={`w-full max-w-md mx-auto ${
                  sosActive 
                    ? 'bg-gray-400 cursor-not-allowedScale' 
                    : 'bg-gradient-to-r from-[#FF3B30] to-[#FF2D55] hover:opacity-95 shadow-lg shadow-red-500/20 active:scale-95'
                } text-white font-black py-5 px-8 rounded-2xl transition-all tracking-wide text-xl shadow-md flex items-center justify-center gap-3`}
              >
                {sosActive ? 'SENDING SOS SIGNAL...' : '?? TRIGGER EMERGENCY SOS'}
              </button>
            </div>
          </div>
        </section>

        {/* Quick Access Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/medicine" className="bg-white dark:bg-[#1C1C1E] p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800/80 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#34C759] to-[#30B0C7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-green-500/10">
              <Pill className="text-white" size={28} />
            </div>
            <h3 className={`font-extrabold text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-xl' : 'text-base'}`}>Medicine</h3>
            <p className="text-xs font-medium text-gray-500 mt-1">Intelligent reminder</p>
          </Link>

          <Link href="/health" className="bg-white dark:bg-[#1C1C1E] p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800/80 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF9500] to-[#FFCC00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-orange-500/10">
              <Activity className="text-white" size={28} />
            </div>
            <h3 className={`font-extrabold text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-xl' : 'text-base'}`}>Vitals</h3>
            <p className="text-xs font-medium text-gray-500 mt-1">Track metrics</p>
          </Link>

          <Link href="/routine" className="bg-white dark:bg-[#1C1C1E] p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800/80 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#AF52DE] to-[#FF2D55] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-purple-500/10">
              <Footprints className="text-white" size={28} />
            </div>
            <h3 className={`font-extrabold text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-xl' : 'text-base'}`}>Routine</h3>
            <p className="text-xs font-medium text-gray-500 mt-1">Daily activities</p>
          </Link>

          <Link href="/family" className="bg-white dark:bg-[#1C1C1E] p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800/80 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#007AFF] to-[#5856D6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md shadow-blue-500/10">
              <Users className="text-white" size={28} />
            </div>
            <h3 className={`font-extrabold text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-xl' : 'text-base'}`}>Caregivers</h3>
            <p className="text-xs font-medium text-gray-500 mt-1">Family connection</p>
          </Link>
        </section>

        {/* Interactive Today's Health Vitals */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none p-6 border border-gray-100 dark:border-gray-800">
          <h2 className={`font-bold mb-4 text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-2xl' : 'text-lg'}`}>Vitals & Health Status</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl border border-blue-100/30 dark:border-transparent text-center">
              <div className="text-3xl font-black text-[#007AFF]">72</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Heart Rate</div>
              <div className="text-[10px] text-green-600 font-semibold bg-green-100 dark:bg-green-950/30 dark:text-green-400 px-2 py-0.5 rounded-full inline-block mt-2">NORMAL</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl border border-green-100/30 dark:border-transparent text-center">
              <div className="text-3xl font-black text-[#34C759]">120/80</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">BP (Vitals)</div>
              <div className="text-[10px] text-green-600 font-semibold bg-green-100 dark:bg-green-950/30 dark:text-green-400 px-2 py-0.5 rounded-full inline-block mt-2">OPTIMAL</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl border border-orange-100/30 dark:border-transparent text-center">
              <div className="text-3xl font-black text-[#FF9500]">68.5</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Weight (kg)</div>
              <div className="text-[10px] text-blue-600 font-semibold bg-blue-100 dark:bg-blue-950/30 dark:text-blue-400 px-2 py-0.5 rounded-full inline-block mt-2">STABLE</div>
            </div>
          </div>
        </section>

        {/* Interactive Medication Tracker */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none p-6 border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`font-bold text-[#000000] dark:text-[#FFFFFF] ${elderMode ? 'text-2xl' : 'text-lg'}`}>Medication Checklist</h2>
            <Link href="/medicine" className="text-[#007AFF] hover:underline text-sm font-semibold flex items-center">
              Manage Pills <ChevronRight size={16} />
            </Link>
          </div>
          <div className="space-y-4">
            {/* Morning Pill */}
            <div className={`flex items-center justify-between p-5 rounded-2xl transition-all ${
              pillTaken.morning 
                ? 'bg-green-50/50 dark:bg-green-950/10 border border-green-100 dark:border-green-900/30' 
                : 'bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-transparent'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  pillTaken.morning ? 'bg-[#34C759] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className={`font-extrabold ${pillTaken.morning ? 'line-through text-gray-400 dark:text-gray-600' : 'text-black dark:text-white'}`}>
                    Morning Medications
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">8:00 AM ? Lisinopril, Metformin</p>
                </div>
              </div>
              <button 
                onClick={() => togglePill('morning')}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  pillTaken.morning 
                    ? 'bg-[#34C759] text-white shadow-lg shadow-green-500/20' 
                    : 'border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400'
                }`}
              >
                {pillTaken.morning ? <Check size={20} /> : null}
              </button>
            </div>

            {/* Afternoon Pill */}
            <div className={`flex items-center justify-between p-5 rounded-2xl transition-all ${
              pillTaken.afternoon 
                ? 'bg-green-50/50 dark:bg-green-950/10 border border-green-100 dark:border-green-900/30' 
                : 'bg-gray-50 dark:bg-gray-800/80 border border-gray-100 dark:border-transparent'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  pillTaken.afternoon ? 'bg-[#34C759] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className={`font-extrabold ${pillTaken.afternoon ? 'line-through text-gray-400 dark:text-gray-600' : 'text-black dark:text-white'}`}>
                    Evening Medications
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">8:00 PM ? Atorvastatin, Vitamin D</p>
                </div>
              </div>
              <button 
                onClick={() => togglePill('afternoon')}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  pillTaken.afternoon 
                    ? 'bg-[#34C759] text-white shadow-lg shadow-green-500/20' 
                    : 'border-2 border-gray-300 dark:border-gray-600 hover:border-[#34C759]'
                }`}
              >
                {pillTaken.afternoon ? <Check size={20} /> : null}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
