import { h, Component } from 'preact';
import style from './style.css';

export class Talk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
    this.showMoreInfo = this.showMoreInfo.bind(this);
  }
  showMoreInfo() {
    this.setState({
      shown: !this.state.shown
    });
  }
  render() {
    const { project } = this.props;
    const shownClasses = (() => {
      const classes = [style.inactiveInfo];
      if (this.state.shown) {
        classes.push(style.inactiveInfoShow);
      }
      return classes.join(' ');
    })();
    return (
      <div className={ style.project }>
        <div className={ style.activeInfo }>
          <div
            className={ style.imageContainer }
            style={{
              backgroundImage: `url(${project.img})`
            }}
          />
          <div className={ style.textContainer }>
            <a
              className={ style.title }
              href={ project.link ? project.link : null }
              rel="noopener noreferrer"
              target="_blank"
            >
              { project.title }
            </a>
            <p> { project.descripcionCorta } </p>
          </div>
          <button
            className={ style.moreInfoContainer }
            href="#"
            onClick={ this.showMoreInfo }
            rel="noopener noreferrer"
            target="_blank"
          >
            More Info...
          </button>
        </div>
        <div className={ shownClasses }>
          <a
            className={ style.title }
            href={ project.link ? project.link : null }
            rel="noopener noreferrer"
            target="_blank"
          >
            { project.title }
          </a>
          <p> { project.descripcion } </p>
        </div>
      </div>
    );
  }
}

export default Talk;
