import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-amber-300/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
                <span className="text-sm font-medium text-amber-700">🌟 Premium Local Honey</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Pure.
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Local.
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Natural.
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Experience the golden taste of our locally sourced, raw honey - straight from our hives to your table with love and tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#social" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/40 backdrop-blur-sm border border-white/30 text-amber-700 hover:bg-white/60 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Follow Our Journey
              </a>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            {/* Main Honey Jar */}
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-amber-200 via-orange-300 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20 animate-float">
                <div className="text-9xl filter drop-shadow-2xl">
                  🍯
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30 animate-bounce-slow">
                <div className="text-3xl">🐝</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30 animate-bounce-slow delay-500">
                <div className="text-3xl">🌻</div>
              </div>
              <div className="absolute top-1/2 -left-12 bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/30 animate-bounce-slow delay-1000">
                <div className="text-2xl">🌿</div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-2xl scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
