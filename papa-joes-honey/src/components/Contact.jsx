import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      info: '(970) 593-2800',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'joe-mulholland@hotmail.com',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: '📍',
      title: 'Address',
      info: '4855 W. Eisenhower Blvd.\nLoveland, Colorado 80537',
      gradient: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-yellow-200/15 to-amber-200/15 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
            <span className="text-sm font-medium text-amber-700">💬 Let's Connect</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to taste the difference? Contact us to learn more about our honey or place an order. 
            We'd love to hear from you and share our passion for pure, local honey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            {contactInfo.map((item, index) => (
              <div key={index} className="group flex items-start space-x-6 bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{animationDelay: `${index * 200}ms`}}>
                <div className={`bg-gradient-to-r ${item.gradient} rounded-2xl p-4 flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <span className="text-3xl filter drop-shadow-lg">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-amber-100/50 to-orange-100/50 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🍯 Why Choose Papa Joe's?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>100% pure, unfiltered local honey</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Family-owned for over 10 years</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Sustainable beekeeping practices</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-xl animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 shadow-lg focus:shadow-xl"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 shadow-lg focus:shadow-xl"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your honey needs..."
                  rows="6"
                  required
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-600 resize-none shadow-lg focus:shadow-xl"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Send Message 🍯</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
