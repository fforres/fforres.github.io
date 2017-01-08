import Inferno from 'inferno';

import Landing from './components/Landing';
import Text from './components/Text';
import Resumen from './components/Resumen';
import Footer from '../../components/Footer';

const app = () => (
  <div>
    <Landing />
    <Text />
    <Resumen />
    <Footer />
  </div>
);

Inferno.render(app(), document.getElementById('app'));
