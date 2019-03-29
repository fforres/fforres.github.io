import React, { Component, Fragment } from 'react'
import talksData from '../components/Talk/data.json'
import Talk from '../components/Talk'
import Hr from '../components/Hr'

class Talks extends Component {
  render() {
    return (
      <Fragment>
        <section className="container">
          <div>
            <h1>Talks & presentations</h1>
          </div>

          {talksData.map((el, i) => (
            <Talk key={i} talk={el} />
          ))}
        </section>
        <style jsx>{`
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

export default Talks
