import React, { Component } from 'react'

interface ISocialButtons {
  icons: String
}

class SocialButton extends Component<ISocialButtons, any> {
  render() {
    return (
      <a>
        socialButton
        <style jsx>{`
          a {
          }
        `}</style>
      </a>
    )
  }
}

export default SocialButton
