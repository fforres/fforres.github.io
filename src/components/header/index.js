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
        <nav className={ style.nav }>{ this.renderLinks() }</nav>
      </div>
    )
  }
}

export default TopBar
