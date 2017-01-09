import Component from 'inferno-component';
import {
  row,
  center,
  section,
} from '../../styles';

import { footer, link } from './style';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        // className="row center section"
        className={`${row} ${center} ${section}`}
      >
        <div className={`col-xs-8 ${footer}`}>
          <a
            href="http://twitter.com/fforres"
            rel="noopener noreferrer"
            className={`${link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-twitter" />
          </a>
          <a
            href="http://facebook.com/fforres"
            rel="noopener noreferrer"
            className={`${link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-facebook" />
          </a>
          <a
            href="https://cl.linkedin.com/in/fforres"
            rel="noopener noreferrer"
            className={`${link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-linkedin" />
          </a>
          <a
            href="http://github.com/fforres"
            rel="noopener noreferrer"
            className={`${link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-github" />
          </a>
          <a
            href="http://flickr.com/fforres"
            rel="noopener noreferrer"
            className={`${link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-flickr" />
          </a>
          <a
            href="mailto:felipe.torressepulveda@gmail.com"
            rel="noopener noreferrer"
            className={`${link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}


export default Landing;
