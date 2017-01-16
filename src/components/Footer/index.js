import Component from 'inferno-component';
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
        <div className={`col-xs-8`}>
          <a
            href="http://twitter.com/fforres"
            rel="noopener noreferrer"
            className={`${style.link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-twitter" />
          </a>
          <a
            href="http://facebook.com/fforres"
            rel="noopener noreferrer"
            className={`${style.link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-facebook" />
          </a>
          <a
            href="https://cl.linkedin.com/in/fforres"
            rel="noopener noreferrer"
            className={`${style.link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-linkedin" />
          </a>
          <a
            href="http://github.com/fforres"
            rel="noopener noreferrer"
            className={`${style.link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-github" />
          </a>
          <a
            href="http://flickr.com/fforres"
            rel="noopener noreferrer"
            className={`${style.link}`}
            target="_blank"
          >
            <i className="fa fa-fw fa-flickr" />
          </a>
          <a
            href="mailto:felipe.torressepulveda@gmail.com"
            rel="noopener noreferrer"
            className={`${style.link}`}
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
