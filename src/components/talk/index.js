import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import style from './style.css';

export class Talk extends Component {
  render() {
    const link = this.props.talk.talk.length ? (
      <a
        className={ style.link }
        href={ this.props.talk.talk }
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className={ 'icon-external-link' } />
      </a>
    ) : null;
    return (
      <div className={ style.talk }>
        <div className={ style.title }>
          <a
            className={ style.link }
            href={ this.props.talk.organizacion.link }
            rel="noopener noreferrer"
            target="_blank"
          >
            { this.props.talk.organizacion.nombre }
          </a>
          <div className={ style.fecha }> { this.props.talk.fecha } </div>
        </div>
        <div className={ style.talkTitle }>
          <span>{ this.props.talk.title }</span>
          <span className={ style.talkLink }>{ link }</span>
        </div>
        <div className={ style.descripcion }> { this.props.talk.descripcion } </div>
      </div>
    );
  }
}

Talk.propTypes = {
  talk: PropTypes.shape({
    descripcion: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    organizacion: PropTypes.shape({
      link: PropTypes.string,
      nombre: PropTypes.string,
      title: PropTypes.string
    }),
    talk: PropTypes.oneOfType([
      PropTypes.instanceOf(undefined),
      PropTypes.string
    ]),
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Talk;
