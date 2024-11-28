import { useState } from 'react'
import { Settings, Bell } from 'lucide-react'
// import Image from 'next/image'

export function Navigation() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  return (
    <nav className="bg-[#2B4B6B] text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image 
            src="/placeholder.svg" 
            alt="PetPal Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">PetPal</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="hover:text-gray-300">Overview</a>
          <a href="#" className="hover:text-gray-300">Health</a>
          <a href="#" className="text-[#4CAF50]">Appointments</a>
          <a href="#" className="hover:text-gray-300">Community</a>
        </div>
        
        <div className="relative flex items-center space-x-4">
          <Bell className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Image 
                src="/placeholder.svg" 
                alt="Pet Profile" 
                width={32} 
                height={32} 
                className="w-8 h-8 rounded-full"
              />
              <span>▼</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
          <Settings className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </nav>
  )
}
