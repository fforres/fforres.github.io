import React, { Component, Fragment } from 'react'
import Link from 'next/link'

import Icon, { Iicon } from '../Icon'
import {
  textColorDarkBackground,
  lighterTextColorDarkBackground
} from '../style/colors'

interface ISocialLink extends Iicon {
  href: string
}

class SocialLink extends Component<ISocialLink, any> {
  render() {
    return (
      <Fragment>
        <Link href={this.props.href}>
          <a>
            <Icon iconName={this.props.iconName} />
          </a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            padding: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          a :global(path) {
            fill: ${textColorDarkBackground};
            transition: fill 35ms;
          }
          a:hover :global(path) {
            fill: ${lighterTextColorDarkBackground};
          }
        `}</style>
      </Fragment>
    )
  }
}

export default SocialLink
