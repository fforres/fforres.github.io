import Component from 'inferno-component';
import Talk from '../Talk';
import style from './style.css';
import talksData from './talks.json';

export class Talks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.talks = talksData;
  }
  render() {
    const talks = this.state.talks.map((el, i) => (
      <Talk talk={el} key={i} />
    ));
    return (
      <div className={style.talksArea}>
        <div className={style.title}>
          <h1>Talks & presentations:</h1>
        </div>
        <div className={style.container}>
          { talks }
        </div>
      </div>
    );
  }
}

export default Talks;
