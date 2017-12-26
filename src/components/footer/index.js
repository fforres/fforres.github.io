import { h, Component } from 'preact';
import style from './style.css';
import Division from '../Division';

export class Landing extends Component {
  render() {
    return (
      <div className={ style.footer }>
        <Division />
        <div className={ style.iconscontainer }>
          <a
            className={ style.link }
            href="http://twitter.com/fforres"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={ 'icon-twitter-square' } />
          </a>
          <a
            className={ style.link }
            href="http://facebook.com/fforres"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={ 'icon-facebook-square' } />
          </a>
          <a
            className={ style.link }
            href="https://cl.linkedin.com/in/fforres"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={ 'icon-linkedin-square' } />
          </a>
          <a
            className={ style.link }
            href="http://github.com/fforres"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={ 'icon-github-square' } />
          </a>
          <a
            className={ style.link }
            href="http://flickr.com/fforres"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={ 'icon-flickr' } />
          </a>
          <a
            className={ style.link }
            href="mailto:felipe.torressepulveda@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={ 'icon-envelope-square' } />
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
