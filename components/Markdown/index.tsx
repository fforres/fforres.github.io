import { Interweave } from "interweave";
import React, { Component, Fragment } from "react";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import unified from "unified";
import InlineLink from "../InlineLink";

const getAttributes = (attrs: NamedNodeMap): any => {
  const attributes: Record<string, string> = {};
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
    rawMarkdown: "",
  };

  state = {
    content: "",
  };

  transform = (node: HTMLElement) => {
    const attributes = getAttributes(node.attributes);
    if (node.tagName === "A") {
      return (
        <InlineLink {...attributes}>
          <Interweave
            transform={this.transform}
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
      content: <Interweave transform={this.transform} content={content} />,
    });
  }

  render() {
    return <Fragment>{this.state.content}</Fragment>;
  }
}

export default Markdown;
