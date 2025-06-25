import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import RouterConfig from './config/RouterConfig'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <RouterConfig />
      <Footer />
    </div>
  )
}

export default App
