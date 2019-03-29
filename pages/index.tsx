import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import { tabletMax } from '../components/style/breakpoints'

class Home extends Component {
  render() {
    return (
      <div className="root">
        <Sidebar />
        <TopBar />
        <div>body</div>
        <style jsx>{`
          .root {
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          @media (max-width: ${tabletMax}px) {
            .root {
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Home
