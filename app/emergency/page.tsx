import Link from 'next/link'
import { Phone, MapPin, Heart, AlertTriangle } from 'lucide-react'

export default function EmergencyPage() {
  const emergencyContacts = [
    { id: 1, name: 'Emergency Services', phone: '911', type: 'emergency' },
    { id: 2, name: 'Local Hospital', phone: '(555) 123-4567', type: 'medical' },
    { id: 3, name: 'Family Doctor', phone: '(555) 987-6543', type: 'medical' },
    { id: 4, name: 'Sarah (Daughter)', phone: '(555) 111-2222', type: 'family' },
    { id: 5, name: 'Michael (Son)', phone: '(555) 333-4444', type: 'family' },
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
          <h1 className="text-xl font-bold text-[#FF3B30]">Emergency</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Emergency Button */}
        <div className="text-center p-8">
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-[#FF3B30] to-[#CC0000] flex items-center justify-center shadow-2xl mb-8 animate-pulse">
            <div className="text-center text-white">
              <Phone size={80} className="mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-2">EMERGENCY</h2>
              <p className="text-xl">TAP FOR HELP</p>
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <button className="w-full bg-white dark:bg-[#1C1C1E] hover:bg-gray-50 dark:hover:bg-gray-800 border-2 border-[#FF3B30] text-[#FF3B30] font-bold py-4 rounded-2xl transition-all">
              Call Emergency Services (911)
            </button>
            <button className="w-full bg-[#FF3B30] hover:bg-[#FF2D2D] text-white font-bold py-4 rounded-2xl transition-colors">
              Send Emergency Alert to Family
            </button>
          </div>
        </div>

        {/* Medical Info */}
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[#FF9500]" size={24} />
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Medical Information</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Blood Type</span>
              <span className="font-semibold text-[#000000] dark:text-[#FFFFFF]">O+</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Allergies</span>
              <span className="font-semibold text-[#FF3B30] dark:text-[#FF3B30]">Penicillin, Latex</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Conditions</span>
              <span className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Hypertension, Type 2 Diabetes</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <span className="text-gray-600 dark:text-gray-400">Medications</span>
              <span className="font-semibold text-[#000000] dark:text-[#FFFFFF]">Lisinopril, Metformin</span>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="text-[#007AFF]" size={24} />
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Emergency Contacts</h2>
          </div>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div>
                  <h3 className="font-semibold text-[#000000] dark:text-[#FFFFFF]">{contact.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{contact.type}</p>
                </div>
                <button className="bg-[#007AFF] hover:bg-[#0069D9] text-white px-6 py-2 rounded-lg text-sm font-medium">
                  Call
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Location Sharing */}
        <div className="bg-[#34C759] rounded-2xl shadow-sm p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={24} />
            <h2 className="text-lg font-bold">Location Sharing</h2>
          </div>
          <p className="mb-4">Your current location will be shared with family members when emergency is activated.</p>
          <button className="w-full bg-white text-[#34C759] font-bold py-3 rounded-xl transition-colors">
            Share My Location Now
          </button>
        </div>

        {/* Recent Emergencies */}
        <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-[#FF3B30]" size={24} />
            <h2 className="text-lg font-bold text-[#000000] dark:text-[#FFFFFF]">Emergency History</h2>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">No emergency alerts sent today</p>
          </div>
        </div>
      </main>
    </div>
  )
}
