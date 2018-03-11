import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
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
  render() {
    return (
      <div className={ layoutStyle.sidebar }>
        <nav className={ style.nav }>
          { TopBar.LinkArrays.map(({ title, link }) => (
            <Link
              activeClassName={ style.active }
              className={ style.topBarLink }
              href={ link }
            >
              { title }
            </Link>
          )) }
        </nav>
      </div>
    )
  }
}

export default TopBar
