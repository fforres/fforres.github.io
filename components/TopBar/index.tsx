import React, { Component } from 'react'
import { tabletMin } from '../style/breakpoints'
import Link from 'next/link'
import {
  backgroundColor,
  textColorDarkBackground,
  darkerBackgroundColor,
  lighterTextColorDarkBackground
} from '../style/colors'

class Home extends Component {
  render() {
    return (
      <nav className="topBar">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/talks">
          <a>Talks</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <style jsx>{`
          nav.topBar {
            height: 3rem;
            width: 100%;
            background-color: ${backgroundColor};
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }
          nav a {
            color: ${textColorDarkBackground};
            text-decoration: none;
            height: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 150ms ease, color 200ms ease;
          }
          nav a:hover {
            color: ${lighterTextColorDarkBackground};
          }

          @media (min-width: ${tabletMin}px) {
            nav.topBar {
              display: none;
            }
          }
        `}</style>
      </nav>
    )
  }
}

export default Home
