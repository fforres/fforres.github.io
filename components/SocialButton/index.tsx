import React, { Component } from "react";

interface ISocialButtons {
  icons: String;
}

class SocialButton extends Component<ISocialButtons, any> {
  render() {
    console.log(this.props.icons);
    return <div>s</div>;
  }
}

export default SocialButton;
