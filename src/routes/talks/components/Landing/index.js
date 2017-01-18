import Component from 'inferno-component';
import style from './style.css';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
    this.setScroll = this.setScroll.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.setState({
      pos: document.getElementById('hi').offsetTop,
      time: 200,
    }, this.setScroll);
  }
  setScroll() {
    const { pos, time } = this.state;
    let currentPos = document.body.scrollTop;
    const int = setInterval(() => {
      window.scrollTo(0, currentPos + (pos / time) + 7);
      currentPos = document.body.scrollTop;
      if (currentPos >= pos) {
        clearInterval(int);
      }
    }, (pos / time));
  }
  render() {
    return (
      <div className={style.landingContainer}>
        <div className={style.title}>
          <h1 className={style.salutation}>I&apos;m fforres!</h1>
          <p className={style.presentation}>
            And this are some talks and presentations I've given.
          </p>
          <p className="presentacion">
            <a
              href="//fforr.es/gpn"
              rel="noopener noreferrer"
              target="_blank"
              className={`${style.link} sliding-middle-out`}
            >I also made a &quot;Groupon-coupon-like-website&quot; selling... me? </a>
          </p>
          <p>
            <a
              id="tohi"
              href="#hi"
              onClick={this.onClick}
            ><i className="fa fa-fw fa-caret-down" /></a>
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
