import Component from 'inferno-component';
import underline from '../../styles/underline.css';
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
          className={underline['sliding-middle-out']}
          href="/"
        > Home </a>
        <a
          className={underline['sliding-middle-out']}
          href="/talks.html"
        > Talks </a>
      </div>
    );
  }
}

export default TopBar;
