import React, { Component } from 'react'
import './about.css'
import headshot from '../../assets/jackie.jpg'
import couch from '../../assets/couch.jpg'

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>About Me</h2>
        <p className="blurb">
          <img className='headshot' src={headshot} alt='Jackie' />
          {`I am a graduate of Cleveland State, a CACREP accredited university, and I 
        hold a Master's degree in education.  I've completed the Clinical Mental 
        Health counseling program and am a licensed professional counselor.  Clevelend 
        State's program included many self-growth exercises I swear by because, unless 
        I understand myself, I cannot possibly help you understand you.  I counsel in all 
        different issues across the spectrum, and I believe in getting to the root.`}
        </p>
        <h2>Mission Statement</h2>
        <p className="blurb">
          <img className='heropic' src={couch} alt='office' />
          {`It is my mission to take what I have learned and use it to help you 
          better understand yourself, help you grow in ways that are priceless.  Two 
          minds are better than one, and two hearts are better than one.  I plan on 
          being your partner in self-growth, in a loving, caring, challenging and 
          yet enjoyable and positive environment.  You already have all of your answers, 
          and I will help you find them.`}
        </p>
      </div>
    )
  }
}


export default About