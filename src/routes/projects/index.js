import Inferno from 'inferno';

import Projects from './components/Projects';
import Landing from './components/Landing';

import '../../js';
import '../../styles';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const app = () => (
  <div>
    <TopBar />
    <Landing />
    <Projects />
    <Footer />
  </div>
);

Inferno.render(app(), document.getElementById('app'));
