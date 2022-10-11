import React, { Component } from "react";
import FacebookSvg from "./facebook";
import FlickrSvg from "./flickr";
import GithubSvg from "./github";
import LinkedinSvg from "./linkedin";
import TwitterSvg from "./twitter";

export interface Iicon {
  iconName: "Twitter" | "Facebook" | "Linkedin" | "Email" | "Github" | "Flicker";
}

// Icons obtained from https://iconmonstr.com
class Icon extends Component<Iicon, any> {
  render() {
    const { iconName } = this.props;
    switch (iconName) {
      case "Twitter":
        return <TwitterSvg />;
        break;
      case "Facebook":
        return <FacebookSvg />;
        break;
      case "Linkedin":
        return <LinkedinSvg />;
        break;
      case "Github":
        return <GithubSvg />;
        break;
      case "Flicker":
        return <FlickrSvg />;
        break;
      default:
        return null;
        break;
    }
  }
}

export default Icon;
