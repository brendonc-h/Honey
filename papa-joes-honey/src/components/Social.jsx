import React from 'react'

const Social = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      href: '#',
      gradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'group-hover:from-blue-600 group-hover:to-blue-700'
    },
    {
      name: 'Instagram',
      icon: '📷',
      href: '#',
      gradient: 'from-pink-500 to-purple-600',
      hoverGradient: 'group-hover:from-pink-600 group-hover:to-purple-700'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      href: '#',
      gradient: 'from-sky-400 to-blue-500',
      hoverGradient: 'group-hover:from-sky-500 group-hover:to-blue-600'
    },
    {
      name: 'YouTube',
      icon: '📺',
      href: '#',
      gradient: 'from-red-500 to-red-600',
      hoverGradient: 'group-hover:from-red-600 group-hover:to-red-700'
    }
  ]

  return (
    <section id="social" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
            <span className="text-sm font-medium text-amber-700">🌐 Connect With Us</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Follow Our Journey
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stay connected with Papa Joe's and see behind the scenes of our honey-making process, 
            from hive to jar with love and tradition.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <div className="font-bold text-gray-900 group-hover:text-white transition-colors duration-300 text-lg">
                  {social.name}
                </div>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} ${social.hoverGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-0`}></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 scale-110`}></div>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Get exclusive updates, honey recipes, and behind-the-scenes content from our local honey farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Subscribe to Updates
            </button>
            <button className="px-6 py-3 bg-white/60 backdrop-blur-sm border border-white/30 text-amber-700 hover:bg-white/80 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Download Recipe Book
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Social
