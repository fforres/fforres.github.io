import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

export class TopBar extends Component {
  render() {
    return (
      <div className={ style.topBarWrapper }>
        <nav>
          <Link
            activeClassName={ style.active }
            className={ style.topBarLink }
            href="/"
          >
            Home
          </Link>
          <Link
            activeClassName={ style.active }
            className={ style.topBarLink }
            href="/talks"
          >
            Talks
          </Link>
          <Link
            activeClassName={ style.active }
            className={ style.topBarLink }
            href="/projects"
            sasd
          >
            Projects
          </Link>
        </nav>
      </div>
    );
  }
}

export default TopBar;
