import React from 'react'
import './App.css'
import Home from './components/home'

let year = new Date()
year = year.getFullYear()

function App() {
  return (
    <div className="App">
      <Home />
      <footer style={{fontSize: '0.8em', alignSelf: 'flex-end'}}>Jackie Pavel {year}</footer>
    </div>
  )
}

export default App
