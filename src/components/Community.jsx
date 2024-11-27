import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { randomColor, randomPosition, randomRotation } from '../utils'
import { Link } from 'react-router-dom';

export function Community() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-8 relative overflow-hidden">
      {/* Navigation */}
      <nav className="w-full text-center">
        <span className="text-[#40E0D0] text-sm font-medium">HOME</span>
      </nav>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Generate random positions for decorative elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${randomPosition()} ${randomRotation()}`}
          >
            {i % 2 === 0 ? (
              <div className={`w-4 h-0.5 ${randomColor()}`} />
            ) : (
              <div className={`text-xl ${randomColor()}`}>+</div>
            )}
          </div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className={`absolute w-1.5 h-1.5 bg-black rounded-full ${randomPosition()}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow z-10 text-center">
        <h1 className="text-5xl md:text-8xl font-bold tracking-wider mb-6">
          COMING SOON
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          We will be celebrating the launch of our new site very soon!
        </p>
        <button className="bg-[#070808] text-white px-8 py-2 rounded hover:bg-[#070808] transition-colors">
            <Link to="/Overview" className="text-white no-underline">
              Back to Overview
            </Link>
</button>
      </main>

      {/* Footer */}
      <footer className="w-full text-center z-10">
        <p className="text-gray-500 text-sm mb-4">
          © 2023 by "Coming Soon". Proudly created with WIX.com
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-gray-600 hover:text-black">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  )
}

