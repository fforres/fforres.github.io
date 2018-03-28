import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import classNames from 'classnames'
import style from './style.css'
import layoutStyle from '../app.css'

export class TopBar extends Component {
  static LinkArrays = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Talks',
      link: '/talks'
    },
    {
      title: 'Projects',
      link: '/projects'
    }
  ]

  renderLinks = () => {
    return TopBar.LinkArrays.map(({ title, link }) => (
      <Link className={ style.topBarLink } href={ link }>
        { title }
      </Link>
    ))
  }

  render() {
    return (
      <div className={ classNames(layoutStyle.sidebar, style.headerStyle) }>
        <span />
        <nav className={ style.nav }>{ this.renderLinks() }</nav>
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
    )
  }
}

export default TopBar
