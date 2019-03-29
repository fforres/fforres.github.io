import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import { tabletMax } from '../components/style/breakpoints'
import Hero from '../components/Hero'

class Home extends Component {
  render() {
    return (
      <div className="root">
        <Sidebar />
        <TopBar />
        <div className="pageContainer">
          <Hero />
        </div>
        <style jsx>{`
          .root {
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          .pageContainer {
            width: 100%;
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
