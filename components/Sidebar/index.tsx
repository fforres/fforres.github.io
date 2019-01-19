import React, { Component } from 'react'
import Link from 'next/link'

import { backgroundColor, textColorDarkBackground } from '../style/colors'
import Icon from '../Icon'

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
          <Link href="http://twitter.com/fforres">
            <a>
              <Icon iconName="Twitter" />
            </a>
          </Link>
          <Link href="http://facebook.com/fforres">
            <a>
              <Icon iconName="Facebook" />
            </a>
          </Link>
          <Link href="http://flickr.com/fforres">
            <a>
              <Icon iconName="Flicker" />
            </a>
          </Link>
          <Link href="http://github.com/fforres">
            <a>
              <Icon iconName="Github" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/fforres">
            <a>
              <Icon iconName="Linkedin" />
            </a>
          </Link>
        </div>
        <style jsx>{`
          nav {
            height: 100%;
            width: 11rem;
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
          }
          nav .social-buttons-container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
            width: 100%;
          }
          nav .social-buttons-container a {
            text-decoration: none;
            padding: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </nav>
    )
  }
}

export default Sidebar
