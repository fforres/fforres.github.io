import { h, Component } from 'preact'
import Project from '../project'
import style from './style.css'
import projectsData from './projects.json'

export class Projects extends Component {
  render() {
    const projects = projectsData.map((el, i) => (
      <Project key={ i } project={ el } />
    ))
    return (
      <div className={ style.talksArea }>
        <div className={ style.title }>
          <h1>Projects</h1>
        </div>
        <div className={ style.container }>{ projects }</div>
      </div>
    )
  }
}

export default Projects
