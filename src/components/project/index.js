import { h, Component } from 'preact'
import style from './style.css'
import Picture from '../picture'

export class Talk extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: false
    }
    this.showMoreInfo = this.showMoreInfo.bind(this)
  }
  showMoreInfo() {
    this.setState({
      shown: !this.state.shown
    })
  }
  render() {
    const { project } = this.props
    const { img, link, title } = project
    return (
      <a
        className={ style.project }
        href={ link }
        rel="noopener noreferrer"
        target="_blank"
      >
        <Picture className={ style.image } imageName={ img } />
        <div className={ style.cover }>
          <span className={ style.coverText }>{ title }</span>
        </div>
      </a>
    )
  }
}

export default Talk
