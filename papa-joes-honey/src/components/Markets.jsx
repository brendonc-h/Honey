import React from 'react'

const Markets = () => {
  const marketSchedule = [
    {
      location: 'Loveland - West Jax Parking Lot',
      day: 'Tuesdays',
      time: '9:00 AM - 1:30 PM',
      icon: '🚗',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      location: 'Loveland - Fairground Park',
      day: 'Sundays',
      time: '9:00 AM - 1:30 PM',
      icon: '🎪',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      location: 'Fort Collins - Harmony & Lemay',
      day: 'Sundays',
      time: '10:00 AM - 2:00 PM',
      icon: '🌾',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      location: 'Winter Market - Foothills Mall',
      day: 'November 2nd - April 19th',
      time: 'Seasonal Hours',
      icon: '❄️',
      gradient: 'from-cyan-400 to-blue-500'
    }
  ]

  return (
    <section id="markets" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-l from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
            <span className="text-sm font-medium text-amber-700">📍 Find Us</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Farmers Markets
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Visit us at local farmers markets throughout Loveland and Fort Collins. 
            Fresh honey, friendly faces, and the best local produce around!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketSchedule.map((market, index) => (
            <div 
              key={index} 
              className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative mb-6">
                <div className={`bg-gradient-to-r ${market.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <span className="text-3xl filter drop-shadow-lg">{market.icon}</span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${market.gradient} rounded-2xl w-16 h-16 mx-auto blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300 text-center">
                {market.location}
              </h3>
              
              <div className="space-y-2 text-center">
                <p className="text-amber-700 font-semibold">
                  {market.day}
                </p>
                <p className="text-gray-600">
                  {market.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-xl max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🗓️ Market Schedule
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-amber-700 mb-3">Regular Markets</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Loveland (West Jax):</strong> Tuesdays 9AM-1:30PM</li>
                <li>• <strong>Loveland (Fairground):</strong> Sundays 9AM-1:30PM</li>
                <li>• <strong>Fort Collins:</strong> Sundays 10AM-2PM</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-700 mb-3">Winter Market</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Location:</strong> Foothills Mall, Loveland</li>
                <li>• <strong>Season:</strong> November 2nd - April 19th</li>
                <li>• <strong>Fresh honey available year-round!</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Markets
