import React, { Component, Fragment } from 'react'
import Sidebar from '../components/Sidebar'

class Home extends Component {
  render() {
    return (
      <div className="root">
        <Sidebar />
        <div>body</div>
        <style jsx>{`
          .root {
            height: 100%;
            display: flex;
            flex-direction: row;
          }
        `}</style>
      </div>
    )
  }
}

export default Home
