import React from 'react'
import { motion } from 'framer-motion'

export function Community() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-8 bg-white rounded-lg shadow-xl"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Community</h1>
        <p className="text-2xl text-gray-700 mb-6">Coming Soon!</p>
        <p className="text-lg text-gray-600">
          We're working hard to bring you an amazing pet community experience.
          <br />Stay tuned for updates!
        </p>
      </motion.div>
    </div>
  )
}

