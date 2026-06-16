import Link from 'next/link'
import { Users, Heart, Phone, Bell, Calendar } from 'lucide-react'

export default function FamilyPage() {
  const familyMembers = [
    { id: 1, name: 'Sarah (Daughter)', relation: 'Daughter', status: 'online', lastActive: 'Just now' },
    { id: 2, name: 'Michael (Son)', relation: 'Son', status: 'online', lastActive: '1 hour ago' },
    { id: 3, name: 'Emma (Granddaughter)', relation: 'Granddaughter', status: 'offline', lastActive: 'Yesterday' },
  ]

  const familyActivities = [
    { id: 1, member: 'Sarah', action: 'viewed your profile', time: '2 hours ago' },
    { id: 2, member: 'Michael', action: 'updated contact info', time: '5 hours ago' },
    { id: 3, member: 'Emma', action: 'sent a message', time: 'Yesterday' },
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
          <h1 className="text-xl font-bold text-[#000000] dark:text-[#FFFFFF]">Family Dashboard</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Family Members</h2>
            <button className="bg-[#007AFF] hover:bg-[#0069D9] text-white px-4 py-2 rounded-xl text-sm font-medium">
              + Add Member
            </button>
          </div>
          <div className="space-y-3">
            {familyMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[#007AFF] flex items-center justify-center text-white font-bold text-lg">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.relation} • {member.status}</p>
                </div>
                <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                  <Phone size={20} className="text-[#007AFF]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Activity</h2>
            <button className="text-[#007AFF] text-sm font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {familyActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Heart className="text-[#FF3B30]" size={20} />
                <div className="flex-1">
                  <p className="text-[#000000] dark:text-[#FFFFFF]">
                    <span className="font-semibold">{activity.member}</span> {activity.action}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Emergency Contacts</h2>
          </div>
          <div className="space-y-3">
            {['Emergency Services', 'Local Hospital', 'Family Doctor'].map((contact, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/30">
                <Phone className="text-[#FF3B30]" size={20} />
                <div className="flex-1">
                  <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">{contact}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tap to call</p>
                </div>
                <button className="bg-[#FF3B30] hover:bg-[#FF2D2D] text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Call
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold mb-4 text-[#000000] dark:text-[#FFFFFF]">Family Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Medication Alerts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Notify family when medications are taken</p>
              </div>
              <div className="w-12 h-7 rounded-full bg-[#007AFF] relative">
                <div className="absolute right-1 top-1 w-5 h-5 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Location Sharing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Share your location with family</p>
              </div>
              <div className="w-12 h-7 rounded-full bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
