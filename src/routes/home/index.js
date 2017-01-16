import Inferno from 'inferno';

import '../../js';
import '../../styles';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

import Landing from './components/Landing';
import Text from './components/Text';
import Resumen from './components/Resumen';

const app = () => (
  <div>
    <TopBar />
    <Landing />
    <Text />
    <Resumen />
    <Footer />
  </div>
);

Inferno.render(app(), document.getElementById('app'));
