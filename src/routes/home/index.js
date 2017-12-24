import { h, Component } from 'preact';
import style from './style';
import HomeHero from '../../components/homeHero';

export default class Home extends Component {
  render() {
    return (
      <div className={ style.home }>
        <HomeHero />
      </div>
    );
  }
}
