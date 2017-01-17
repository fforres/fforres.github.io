import Inferno from 'inferno';

import Talks from './components/Talks';

import '../../js';
import '../../styles';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const app = () => (
  <div>
    <TopBar />
    <Talks />
    <Footer />
  </div>
);

Inferno.render(app(), document.getElementById('app'));
