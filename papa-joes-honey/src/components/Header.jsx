import React from 'react'

const Header = () => {
  return (
    <header className="bg-white/20 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-xl shadow-lg">
              <span className="text-2xl">🍯</span>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Papa Joe's
              </div>
              <div className="text-sm text-gray-600 font-medium -mt-1">
                Local Raw Honey
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-1">
            <a href="#about" className="px-4 py-2 rounded-full text-gray-700 hover:bg-white/30 hover:text-amber-600 transition-all duration-300 font-medium">
              About
            </a>
            <a href="#markets" className="px-4 py-2 rounded-full text-gray-700 hover:bg-white/30 hover:text-amber-600 transition-all duration-300 font-medium">
              Markets
            </a>
            <a href="#social" className="px-4 py-2 rounded-full text-gray-700 hover:bg-white/30 hover:text-amber-600 transition-all duration-300 font-medium">
              Follow Us
            </a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-medium shadow-lg">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
