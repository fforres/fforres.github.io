import { h, Component } from 'preact'
import style from './style.css'

export class homeHero extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onClick = this.onClick.bind(this)
    this.setScroll = this.setScroll.bind(this)
  }
  onClick(e) {
    e.preventDefault()
    this.setScroll()
  }
  setScroll() {
    const position = document.getElementById('hi')
    position.scrollIntoView({
      behavior: 'smooth'
    })
  }
  render() {
    return (
      <div className={ style.container }>
        <div className={ style.photoBackground } />
        <div className={ style.title }>
          <h1 className={ style.salutation }>I DO</h1>
          <h1 className={ style.salutation }>JAVASCRIPT</h1>
          <h1 className={ style.salutation }>STUFF</h1>
        </div>
      </div>
    )
  }
}

export default homeHero
