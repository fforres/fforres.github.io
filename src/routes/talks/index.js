import Inferno from 'inferno';

import Talks from './components/Talks';
import Landing from './components/Landing';

import '../../js';
import '../../styles';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const app = () => (
  <div>
    <TopBar />
    <Landing />
    <Talks />
    <Footer />
  </div>
);

Inferno.render(app(), document.getElementById('app'));
