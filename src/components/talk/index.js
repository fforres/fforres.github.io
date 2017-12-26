import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import fontStyle from '../../assets/customFonts/fonts.css';
import style from './style.css';

export class Talk extends Component {
  render() {
    console.log(this.props.talk.talk, fontStyle);
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
    // const link = null;
    return (
      <div className={ style.talk }>
        <a
          className={ style.link }
          href={ this.props.talk.organizacion.link }
          rel="noopener noreferrer"
          target="_blank"
        >
          { this.props.talk.organizacion.nombre }
        </a>
        <div className={ style.title }>
          { this.props.talk.title } { link }
        </div>
        <div className={ style.descripcion }> { this.props.talk.descripcion } </div>
        <div className={ style.fecha }> { this.props.talk.fecha } </div>
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
