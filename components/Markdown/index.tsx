import React, { Component, Fragment } from "react";
import unified from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import Interweave from "interweave";
import InlineLink from "../InlineLink";

const getAttributes = (attrs: NamedNodeMap): any => {
  const attributes: any = {};
  if (attrs) {
    for (const item of Array.from(attrs)) {
      attributes[item.name] = item.value;
    }
  }
  return attributes;
};
class Markdown extends Component<{
  rawMarkdown: string;
}> {
  static defaultProps = {
    rawMarkdown: ""
  };

  state = {
    content: ""
  };

  transform = (node: HTMLHtmlElement) => {
    const attributes = getAttributes(node.attributes);
    if (node.tagName === "A") {
      return (
        <InlineLink {...attributes}>
          <Interweave
            transform={this.transform as any}
            content={node.innerHTML}
          />
        </InlineLink>
      );
    }
  };

  componentDidMount() {
    const { contents } = unified()
      .use(remarkParse)
      .use(remarkHtml)
      .processSync(this.props.rawMarkdown);
    const content = contents.toString();
    this.setState({
      content: (
        <Interweave transform={this.transform as any} content={content} />
      )
    });
  }

  render() {
    return <Fragment>{this.state.content}</Fragment>;
  }
}

export default Markdown;
