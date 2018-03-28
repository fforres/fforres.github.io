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
          {
            // <p className={ style.presentation }>
            //   <span>I enjoy </span>
            //   <span>
            //     <a
            //       className={ `${style.link} sliding-middle-out` }
            //       href="http://github.com/fforres"
            //       rel="noopener noreferrer"
            //       target="_blank"
            //     >
            //       <span>coding, </span>
            //     </a>
            //   </span>
            //   <span>
            //     <a
            //       className={ `${style.link} sliding-middle-out` }
            //       href="http://nodeschool.io"
            //       rel="noopener noreferrer"
            //       target="_blank"
            //     >
            //       <span>teaching </span>
            //     </a>
            //   </span>
            //   <span>& </span>
            //   <span>
            //     <a
            //       className={ `${style.link} sliding-middle-out` }
            //       href="https://www.meetup.com/es/NodersJS/"
            //       rel="noopener noreferrer"
            //       target="_blank"
            //     >
            //       <span>hosting events</span>
            //     </a>
            //   </span>
            // </p>
            // <p className={ style.presentationSmall }>
            //   <a
            //     className={ `${style.link} sliding-middle-out-dark` }
            //     href="//fforres.github.io/gpn"
            //     rel="noopener noreferrer"
            //     target="_blank"
            //   >
            //     I also made a &quot;Groupon-coupon-like-website&quot; selling...
            //     me.
            //   </a>
            // </p>
            // <a className={ style.caret } href="#hi" onClick={ this.onClick }>
            //   <span className={ style.caretIcon } />
            // </a>
          }
        </div>
      </div>
    )
  }
}

export default homeHero
