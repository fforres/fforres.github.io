import Component from 'inferno-component';
import { Icon } from 'react-fa';

import style from './style.css';
import Division from '../Division';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={style.footer}
      >
        <Division />
        <div className={style.iconscontainer}>
          <a
            href="http://twitter.com/fforres"
            rel="noopener noreferrer"
            className={style.link}
            target="_blank"
          >
            <Icon
              name="twitter"
            />
          </a>
          <a
            href="http://facebook.com/fforres"
            rel="noopener noreferrer"
            className={style.link}
            target="_blank"
          >
            <Icon
              name="facebook"
            />
          </a>
          <a
            href="https://cl.linkedin.com/in/fforres"
            rel="noopener noreferrer"
            className={style.link}
            target="_blank"
          >
            <Icon
              name="linkedin"
            />
          </a>
          <a
            href="http://github.com/fforres"
            rel="noopener noreferrer"
            className={style.link}
            target="_blank"
          >
            <Icon
              name="github"
            />
          </a>
          <a
            href="http://flickr.com/fforres"
            rel="noopener noreferrer"
            className={style.link}
            target="_blank"
          >
            <Icon
              name="flickr"
            />
          </a>
          <a
            href="mailto:felipe.torressepulveda@gmail.com"
            rel="noopener noreferrer"
            className={style.link}
            target="_blank"
          >
            <Icon
              name="envelope"
            />
          </a>
        </div>
      </div>
    );
  }
}


export default Landing;
