import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-l from-yellow-500/5 to-amber-500/5 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-2 rounded-xl shadow-lg">
                <span className="text-2xl">🍯</span>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Papa Joe's
                </div>
                <div className="text-sm text-gray-400 -mt-1">
                  Local Raw Honey
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bringing you the finest local honey with love, tradition, and sustainable practices since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-amber-400 transition-colors duration-300">About Our Honey</a>
              <a href="#markets" className="block text-gray-400 hover:text-amber-400 transition-colors duration-300">Farmers Markets</a>
              <a href="#social" className="block text-gray-400 hover:text-amber-400 transition-colors duration-300">Follow Us</a>
              <a href="#contact" className="block text-gray-400 hover:text-amber-400 transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>📞 (970) 593-2800</p>
              <p>✉️ joe-mulholland@hotmail.com</p>
              <p>📍 Loveland, Colorado</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Papa Joe's Local Raw Honey. Made with 🍯 for our community.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Terms</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Sustainability</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
