import React, { Component } from 'react'
import Navbar from './navbar'
import About from './about'
import Contact from './contact'
import Schedule from './schedule'

class Home extends Component {
    state = {
      view: ''
    }

    selectView = (view) => {
      console.log(view)
      this.setState({ view })
    }
    render() {
      const { view } = this.state
      return (
        <div className="hi">
          <Navbar selectView={this.selectView} />
          {view === 'about' ?
            <About /> : view === 'contact' ?
              <Contact /> : view === 'schedule' ?
                <Schedule /> : <About />}
        </div>
      )
    }
}

export default Home