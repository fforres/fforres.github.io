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
          className={''}
          href="/"
        > Home </a>
        <a
          className={''}
          href="/talks.html"
        > Talks </a>
      </div>
    );
  }
}

export default TopBar;
