import { h, Component } from 'preact';
import style from './style.css';

export class homeHero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
    this.setScroll = this.setScroll.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.setState(
      {
        pos: document.getElementById('hi').offsetTop,
        time: 200
      },
      this.setScroll
    );
  }
  setScroll() {
    const { pos, time } = this.state;
    let currentPos = document.body.scrollTop;
    const int = setInterval(() => {
      window.scrollTo(0, currentPos + pos / time + 7);
      currentPos = document.body.scrollTop;
      if (currentPos >= pos) {
        clearInterval(int);
      }
    }, pos / time);
  }
  render() {
    return (
      <div className={ style.container }>
        <div className={ style.photoBackground } />
        <div className={ style.title }>
          <h1 className={ style.salutation }>I&apos;m fforres!</h1>
          <p className={ style.presentation }>
            <span>I enjoy </span>
            <span>
              <a
                className={ `${style.link} sliding-middle-out` }
                href="http://github.com/fforres"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>coding, </span>
              </a>
            </span>
            <span>
              <a
                className={ `${style.link} sliding-middle-out` }
                href="http://nodeschool.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>teaching </span>
              </a>
            </span>
            <span>& </span>
            <span>
              <a
                className={ `${style.link} sliding-middle-out` }
                href="https://www.meetup.com/es/Javascript-Chile/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>hosting events</span>
              </a>
            </span>
          </p>
          <p className={ style.presentationSmall }>
            <a
              className={ `${style.link} sliding-middle-out-dark` }
              href="//fforr.es/gpn"
              rel="noopener noreferrer"
              target="_blank"
            >
              I also made a &quot;Groupon-coupon-like-website&quot; selling...
              me.
            </a>
          </p>
          <p>
            <a href="#hi" id="tohi" onClick={ this.onClick }>
              <i className="fa fa-fw fa-caret-down" />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default homeHero;
