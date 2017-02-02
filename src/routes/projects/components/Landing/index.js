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
          <img
            alt="profile user"
            src="http://1.gravatar.com/avatar/a3f14bf7fc8ae4ad023d1af89071fcd4?size=400"
            className={style.userImage}
          />
          <h1 className={style.salutation}>Yep... still fforres!</h1>
          <p className={style.presentation}>
            And this are some of my Projects
          </p>
          <p className="presentacion">
            (At least the opensourced ones)
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
