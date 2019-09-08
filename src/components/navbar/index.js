import React, { Component } from 'react'
import './navbar.css'
import PropTypes from 'prop-types'

class Navbar extends Component {
  render() {
    const { selectView } = this.props
    return (
      <div className="navbar">
        <ul>
          <li onClick={() => selectView('about')}>
                About
          </li>
          <li onClick={() => selectView('schedule')}>
                Schedule an Appointment
          </li>
          <li onClick={() => selectView('contact')}>
                Contact Me
          </li>
        </ul>
      </div>
    )
  }
}

Navbar.propTypes = {
  selectView: PropTypes.func
}

export default Navbar