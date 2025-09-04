import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Markets from './components/Markets'
import Social from './components/Social'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-honey-100 font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Markets />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
