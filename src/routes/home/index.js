import { h, Component } from 'preact'
import HomeHero from '../../components/homeHero'
import HomeText from '../../components/homeText'
import HomeResume from '../../components/homeResume'
import style from './style.css'

export default class Home extends Component {
  render() {
    return (
      <div className={ style.container }>
        <HomeHero />
        <HomeText />
        <HomeResume />
      </div>
    )
  }
}
