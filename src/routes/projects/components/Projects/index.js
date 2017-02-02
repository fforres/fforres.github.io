import Component from 'inferno-component';
import Project from '../Project';
import style from './style.css';
import talksData from './talks.json';

export class Talks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.talks = talksData;
  }
  render() {
    const projects = this.state.talks.map((el, i) => (
      <Project project={el} key={i} />
    ));
    return (
      <div className={style.talksArea}>
        <div className={style.title}>
          <h1>Projects:</h1>
        </div>
        <div className={style.container}>
          { projects }
        </div>
      </div>
    );
  }
}

export default Talks;
