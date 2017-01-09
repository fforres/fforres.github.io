import Inferno from 'inferno';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const app = () => (
  <div>
    <TopBar />
    <Footer />
  </div>
);

Inferno.render(app(), document.getElementById('app'));
