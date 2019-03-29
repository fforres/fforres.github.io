import React, { Component, Fragment } from 'react'
import Hero from '../components/Hero'
import LongResume from '../components/LongResume'
import SmallResume from '../components/SmallResume'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <div className="contentWrapper">
          <div className="container">
            <LongResume />
            <SmallResume />
          </div>
        </div>
        <style jsx>{`
          .contentWrapper {
            padding-top: 2rem;
            padding-bottom: 2rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .container {
            width: 100%;
            max-width: 46rem;
            padding-left: 3rem;
            padding-right: 3rem;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Home
