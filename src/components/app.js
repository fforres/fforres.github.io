import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Footer from './footer'
import Home from '../routes/home'
import Projects from '../routes/projects'
import Talks from '../routes/talks'

import style from './app.css'
// import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  /** Gets fired when the route changes.
   * @param {Object} event "change" event from [preact-router](http://git.io/preact-router)
   * @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id="app">
        <div className={ style.container }>
          <Header />
          <div className={ style.content }>
            <Router id="router" onChange={ this.handleRoute }>
              <Home path="/" />
              <Projects path="/projects/" />
              <Talks path="/talks/" />
            </Router>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
