import React, { Component } from 'react'
import markdown from './small.md'
import Markdown from '../Markdown'

class LongResume extends Component {
  render() {
    return <Markdown rawMarkdown={markdown} />
  }
}

export default LongResume
