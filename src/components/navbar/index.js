import React, { Component } from 'react'
import './navbar.css'
import PropTypes from 'prop-types'

class Navbar extends Component {
  render() {
    const { selectView, active } = this.props
    return (
      <div className="navbar">
        <ul>
          <li onClick={() => selectView('about')} style={active === 'about' ? {color: '#fff'} : {color: '#000'}}>
                About
          </li>
          <li onClick={() => selectView('schedule')} style={active === 'schedule' ? {color: '#fff'} : {color: '#000'}}>
                Schedule an Appointment
          </li>
          <li onClick={() => selectView('contact')} style={active === 'contact' ? {color: '#fff'} : {color: '#000'}}>
                Contact Me
          </li>
        </ul>
      </div>
    )
  }
}

Navbar.propTypes = {
  selectView: PropTypes.func,
  active: PropTypes.string
}

export default Navbar