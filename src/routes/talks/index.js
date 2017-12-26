import { h, Component } from 'preact';
import Talks from '../../components/talks';

import style from './style';

class TalksPage extends Component {
  // Note: `user` comes from the URL, courtesy of our router
  render() {
    return (
      <div>
        <Talks />
      </div>
    );
  }
}

export default TalksPage;
