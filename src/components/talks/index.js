import { h, Component } from 'preact'
import Talk from '../talk'
import style from './style.css'
import talksData from './talks.json'

export class Talks extends Component {
  render() {
    const talks = talksData.map((el, i) => <Talk key={ i } talk={ el } />)
    return (
      <div className={ style.talksArea }>
        <div className={ style.title }>
          <h1>Talks & presentations</h1>
        </div>
        <div className={ style.container }>{ talks }</div>
      </div>
    )
  }
}

export default Talks
