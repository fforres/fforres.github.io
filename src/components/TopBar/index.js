import Component from 'inferno-component';
import style from './style.css';

export class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style['top-bar-wrapper']}>
        <a
          className={style['top-bar-link']}
          href="/"
        > Home </a>
        <a
          className={style['top-bar-link']}
          href="/talks.html"
        > Talks </a>
        <a
          className={style['top-bar-link']}
          href="/projects.html"
        > Projects </a>
      </div>
    );
  }
}

export default TopBar;
