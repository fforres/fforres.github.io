import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import { textLinkColor, lighterTextLinkColor } from '../style/colors'
class InlineLink extends Component {
  render() {
    const { children, ...rest } = this.props
    return (
      <Fragment>
        <Link {...rest}>
          <a>{children}</a>
        </Link>
        <style jsx>{`
          a {
            position: relative;
            text-decoration: none;
            color: ${textLinkColor};
          }
          a :after {
            bottom: -2px;
            content: '';
            display: block;
            height: 2px;
            left: 0;
            position: absolute;
            transition: width 250ms;
            width: 0;
          }
          a :after {
            background: ${lighterTextLinkColor};
          }
          a:hover:after {
            width: 100%;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default InlineLink
