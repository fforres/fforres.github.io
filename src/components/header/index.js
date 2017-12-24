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

// <a className={ style.topBarLink } href="/">
//           Home
//         </a>
//         <a className={ style.topBarLink } href="/talks.html">
//           Talks
//         </a>
//         <a className={ style.topBarLink } href="/projects.html">
//           Projects
//         </a>
// import { Link } from 'preact-router/match';
// import style from './style';

// export default class Header extends Component {
//   render() {
//     return (
//       <header class={ style.header }>
//         <h1>Preact App</h1>
//         <nav>
//           <Link activeClassName={ style.active } href="/">
//             Home
//           </Link>
//           <Link activeClassName={ style.active } href="/profile">
//             Me
//           </Link>
//           <Link activeClassName={ style.active } href="/profile/john" onClick={() => {}} sasd>
//             John
//           </Link>
//         </nav>
//       </header>
//     );
//   }
// }
