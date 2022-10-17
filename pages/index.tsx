import React, { Component, Fragment } from "react";
import Hero from "../components/Hero";
const Hr = React.lazy(() => import("../components/Hr"));
const LongResume = React.lazy(() => import("../components/LongResume"));
const SmallResume = React.lazy(() => import("../components/SmallResume"));

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <div className="contentWrapper">
          <div className="container">
            <React.Suspense>
              <Hr />
              <LongResume />
              <SmallResume />
            </React.Suspense>
          </div>
        </div>
        <style jsx>
          {`
          .contentWrapper {
            padding-top: 4rem;
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
        `}
        </style>
      </Fragment>
    );
  }
}

export default Home;
