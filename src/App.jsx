import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <About />
        <Services />
        <Articles />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
