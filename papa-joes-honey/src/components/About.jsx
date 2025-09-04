import React from 'react'

const About = () => {
  const features = [
    {
      icon: '🌿',
      title: '100% Natural',
      description: 'No additives or processing',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Locally Sourced',
      description: 'From our community hives',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: '❤️',
      title: 'Family Made',
      description: 'Crafted with love and care',
      gradient: 'from-pink-400 to-rose-500'
    }
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/50 to-orange-50/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
            <span className="text-sm font-medium text-amber-700">✨ Our Story</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              About Our Honey
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Papa Joe's Local Raw Honey is committed to providing the finest quality honey from our local beehives. 
            Our honey is unprocessed, unfiltered, and packed with natural enzymes and nutrients that make it not 
            just delicious, but beneficial for your health.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group text-center animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative mb-8">
                <div className={`bg-gradient-to-r ${feature.gradient} rounded-3xl w-24 h-24 flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                  <span className="text-4xl filter drop-shadow-lg">{feature.icon}</span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl w-24 h-24 mx-auto blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '50+', label: 'Local Hives' },
            { number: '1000+', label: 'Happy Customers' },
            { number: '100%', label: 'Pure & Natural' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
