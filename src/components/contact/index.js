import React, { Component } from 'react'
import './contact.css'

class Contact extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }

    onSubmit = () => console.log('formspree hookup to come', this.state)
    textChange = (e) => this.setState({ [e.target.name]: e.target.value })
    render() {
      return (
        <div className="contactContainer">
          Contact me contact me contact me contact me contact me contact me 
          contact me contact me contact me contact me contact me contact me 
          contact me contact me contact me contact me contact me contact me 
          contact me contact me contact me contact me contact me contact me 
          contact me contact me contact me contact me contact me contact me 
          contact me contact me contact me contact me 
          <input 
            className='input'
            value={this.state.firstName}
            name='firstName'
            onChange={this.textChange} />
          <input 
            className='input'
            value={this.state.lastName}
            name='lastName'
            onChange={this.textChange} />
          <input 
            className='input'
            value={this.state.email}
            name='email'
            onChange={this.textChange} />
          <textarea
            className='message'
            name='message'
            value={this.state.message}
            onChange={this.textChange} />
          <button
            className='btn'
            onClick={this.onSubmit}>
                Submit
          </button>
        </div>
      )
    }
}


export default Contact