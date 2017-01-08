import Inferno from 'inferno';
import Landing from './components/Landing';
import Text from './components/Text';
import Resumen from './components/Resumen';
import Footer from './components/Footer';

const app = () => (
  <div>
    <Landing />
    <Text />
    <Resumen />
    <Footer />
  </div>
);


Inferno.render(app(), document.getElementById('app'));

/*

const load = () => {
  let hiHeight = document.getElementById('hi').offsetTop;

  const setScroll = (pos, time) => {
    let currentPos = document.body.scrollTop;
    const int = setInterval(() => {
      window.scrollTo(0, currentPos + (pos / time) + 7);
      currentPos = document.body.scrollTop;
      if (currentPos >= pos) {
        clearInterval(int);
      }
    }, (pos / time));
  };
  const doClick = (e) => {
    e.preventDefault();
    setScroll(hiHeight, 200);
  };

  // EVENTS EXCECUTIONS
  window.addEventListener('resize', () => {
    hiHeight = document.getElementById('hi').offsetTop;
  });

  document.getElementById('tohi').addEventListener('click', doClick);
};


document.addEventListener('DOMContentLoaded', () => {
  if (document.readyState === 'complete') {
    load();
  }
  if (document.readyState === 'interactive') {
    load();
  }
  document.addEventListener('complete', load, false);
  return null;
});
*/
