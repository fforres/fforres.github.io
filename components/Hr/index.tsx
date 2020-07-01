import React, { Component, Fragment } from "react";

class Hr extends Component {
  render() {
    return (
      <Fragment>
        <hr className="hr" />
        <style jsx>{`
          .hr {
            width: 75%;
            margin-top: 3rem;
            margin-bottom: 3rem;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Hr;
