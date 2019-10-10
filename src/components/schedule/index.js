import React, { Component } from 'react'
import './schedule.css'
import office from '../../assets/office1.jpg'

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h2>Schedule an Appointment With Me</h2>
        <img className='heropic' src={office} alt='office' />
        schedule blurb schedule blurb schedule blurb schedule blurb 
        schedule blurb schedule blurb schedule blurb schedule blurb 
        schedule blurb schedule blurb schedule blurb schedule blurb 
        <p>Calendly plug-in here?</p>
      </div>
    )
  }
}


export default Schedule