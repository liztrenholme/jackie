import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import About from './components/about'
import Contact from './components/contact'
import Schedule from './components/schedule'

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Contact />
      <Schedule />
    </div>
  )
}

export default App
