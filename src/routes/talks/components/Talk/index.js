import Component from 'inferno-component';
import style from './style.css';
import { Icon } from 'react-fa';

export class Talk extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.talk)
    const link = this.props.talk.talk?(
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={this.props.talk.talk}
      >
        <Icon name="external-link" />
      </a>) : null;
    return (
      <a className={style.talk}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={this.props.talk.organizacion.link}
          className={style.organizacion}
        > { this.props.talk.organizacion.nombre } </a>
        <div className={style.title}> { this.props.talk.title } { link }</div>
        <div className={style.descripcion}> { this.props.talk.descripcion } </div>
        <div className={style.fecha}> { this.props.talk.fecha } </div>
      </a>
    );
  }
}

export default Talk;
