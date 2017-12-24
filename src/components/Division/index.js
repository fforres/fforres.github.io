import { h, Component } from 'preact';
import style from './style.css';

export class Division extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <hr className={ style.divison } />;
  }
}

export default Division;
