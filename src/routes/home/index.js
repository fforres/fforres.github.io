import { h, Component } from 'preact';
import style from './style';
import HomeHero from '../../components/homeHero';
import HomeText from '../../components/homeText';
import HomeResume from '../../components/homeResume';

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeHero />
        <HomeText />
        <HomeResume />
      </div>
    );
  }
}
