import React, { Component, Fragment } from "react";
import SocialLink from "../SocialLink";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          <SocialLink href="http://twitter.com/fforres" iconName="Twitter" />
          <SocialLink href="http://facebook.com/fforres" iconName="Facebook" />
          <SocialLink href="http://flickr.com/fforres" iconName="Flicker" />
          <SocialLink href="http://github.com/fforres" iconName="Github" />
          <SocialLink
            href="https://www.linkedin.com/in/fforres"
            iconName="Linkedin"
          />
        </footer>
        <style jsx>{`
          .container {
            width: 100%;
            margin: 0 auto;
            max-width: 46rem;
          }
          footer {
            display: flex;
            justify-content: center;
            padding-bottom: 3rem;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Footer;
