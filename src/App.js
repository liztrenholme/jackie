import React from 'react'
import './App.css'
import Home from './components/home'

let year = new Date()
year = year.getFullYear()

function App() {
  return (
    <div className="App">
      <Home />
      <div className="quoteBox">
        {'Your journey is unfolding exactly the way it\'s meant to.'}
      </div>
      <footer>Jackie Pavel &#9400; {year} | All rights reserved.</footer>
    </div>
  )
}

export default App
