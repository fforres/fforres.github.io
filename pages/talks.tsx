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

          <div className="talkContainer">
            {talksData.map((el: any, i: number) => (
              <Talk key={i} talk={el} />
            ))}
          </div>
        </section>
        <style jsx>{`
          h1 {
            margin-top: 2rem;
            margin-bottom: 3rem;
            text-align: center;
          }

          .talkContainer {
            max-width: 1100px;
            width: 100%;
            display: flex;
            margin-bottom: 3rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-left: 3rem;
            padding-right: 3rem;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Talks
