import React, { Component, Fragment } from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import Interweave from 'interweave'

class Markdown extends Component<{
  rawMarkdown: string
}> {
  static defaultProps = {
    rawMarkdown: ''
  }

  state = {
    content: ''
  }

  componentDidMount() {
    const { contents } = unified()
      .use(remarkParse)
      .use(remarkHtml)
      .processSync(this.props.rawMarkdown)
    const content = contents.toString()
    this.setState({
      content: <Interweave content={content} />
    })
  }

  render() {
    return <Fragment>{this.state.content}</Fragment>
  }
}

export default Markdown
