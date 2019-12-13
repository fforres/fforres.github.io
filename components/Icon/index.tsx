import React, { Component } from "react";
import TwitterSvg from "./twitter";
import FacebookSvg from "./facebook";
import LinkedinSvg from "./linkedin";
import GithubSvg from "./github";
import FlickrSvg from "./flickr";

export interface Iicon {
  iconName:
    | "Twitter"
    | "Facebook"
    | "Linkedin"
    | "Email"
    | "Github"
    | "Flicker";
}

// Icons obtained from https://iconmonstr.com
class Icon extends Component<Iicon, any> {
  render() {
    const { iconName } = this.props;
    switch (iconName) {
      case "Twitter":
        return <TwitterSvg />;
      case "Facebook":
        return <FacebookSvg />;
      case "Linkedin":
        return <LinkedinSvg />;
      case "Github":
        return <GithubSvg />;
      case "Flicker":
        return <FlickrSvg />;
      default:
        return null;
    }
  }
}

export default Icon;
