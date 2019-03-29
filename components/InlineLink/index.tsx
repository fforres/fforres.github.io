import React, { Component, Fragment, AnchorHTMLAttributes } from 'react'
import Link, { LinkProps } from 'next/link'
import { textLinkColor, lighterTextLinkColor } from '../style/colors'

interface InlineLink extends LinkProps {
  rel?: string
  target?: string
}

class InlineLink extends Component<InlineLink> {
  render() {
    const { children, rel, target, ...rest } = this.props
    const relProps = rel ? { rel } : {}
    const targetProps = target ? { target } : {}
    return (
      <Fragment>
        <Link {...rest}>
          <a {...relProps} {...targetProps}>
            {children}
          </a>
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
