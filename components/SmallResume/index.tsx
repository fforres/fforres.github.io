import React, { Component } from "react";
import Markdown from "../Markdown";
import markdown from "./small.md";

class LongResume extends Component {
  render() {
    return <Markdown rawMarkdown={markdown} />;
  }
}

export default LongResume;
