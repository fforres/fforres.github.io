import React, { Component, Fragment } from "react";
import { tabletMax } from "../style/breakpoints";
import { blackColor, lighterTextColorDarkBackground } from "../style/colors";

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="backgroundImage" />
          <div className="text">Hi! <br/>{`I'm fforres`}</div>
        </section>
        <style jsx>
          {`
          section {
            height: 90vh;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .backgroundImage {
            position: absolute;
            background-image: url('/static/fforres.jpeg');
            background-image: url('/static/fforres.webp');
            width: 100%;
            height: 100%;
            filter: blur(1px);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
          }
          .text {
            display: inline-block;
            text-shadow: 1px 1px ${blackColor};
            color: ${lighterTextColorDarkBackground};
            font-weight: 700;
            font-size: 7vw;
            max-width: 60%;
            text-transform: uppercase;
            position: relative;
            text-align: left;
          }
          @media (max-width: ${tabletMax}px) {
            .text {
              font-size: 10vw;
              text-align: right;
            }
          }
        `}
        </style>
      </Fragment>
    );
  }
}

export default Hero;
