import React, { Component } from "react";
import Link from "next/link";

import {
  backgroundColor,
  textColorDarkBackground,
  darkerBackgroundColor,
  lighterTextColorDarkBackground
} from "../style/colors";
import SocialLink from "../SocialLink";
import { tabletMax } from "../style/breakpoints";

class Sidebar extends Component<any, any> {
  render() {
    return (
      <nav>
        <div />
        <div className="links-container">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/talks">
            <a>Talks</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className="social-buttons-container">
          <SocialLink href="http://twitter.com/fforres" iconName="Twitter" />
          <SocialLink href="http://facebook.com/fforres" iconName="Facebook" />
          <SocialLink href="http://flickr.com/fforres" iconName="Flicker" />
          <SocialLink href="http://github.com/fforres" iconName="Github" />
          <SocialLink
            href="https://www.linkedin.com/in/fforres"
            iconName="Linkedin"
          />
        </div>
        <style jsx>{`
          nav {
            height: 100%;
            width: 9rem;
            background-color: ${backgroundColor};
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          nav .links-container a {
            color: ${textColorDarkBackground};
            text-decoration: none;
            width: 100%;
            padding-top: 1rem;
            padding-bottom: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 150ms ease, color 200ms ease;
          }
          nav .links-container a:hover {
            background-color: ${darkerBackgroundColor};
            color: ${lighterTextColorDarkBackground};
          }
          nav .social-buttons-container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            width: 100%;
          }
          @media (max-width: ${tabletMax}px) {
            nav {
              display: none;
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default Sidebar;
