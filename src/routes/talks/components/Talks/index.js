import Component from 'inferno-component';
import Talk from '../Talk';
import style from './style.css';

export class Talks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.talks = [{
      title: 'Hackatones en Groupon!',
      descripcion: 'Lecciones aprendidas en la "GeekOn"',
      fecha: '24 Oct 2016',
      organizacion: {
        nombre: 'IV Devs - IVChallenge 2016',
        link: 'https://www.facebook.com/groups/programadores.iv.region.chile',
      },
      talk: '',
    }, {
      title: 'Desmitificando al FrontEnd Engineer',
      descripcion: '¿Qué es "Front End Development" en el 2016?',
      fecha: '30 Jun 2016',
      organizacion: {
        nombre: 'Laboratoria - May The "Front" be With You',
        link: 'http://laboratoria.la/en/',
      },
      talk: '',
    }, {
      title: 'Viva la re-BOT-lución',
      descripcion: 'PamBot - Groupon y chat-bots para comunicarse con clientes',
      fecha: '5 Feb 2016',
      organizacion: {
        nombre: 'SantiagoJS Meetup (Enero)',
        link: 'http://www.meetup.com/es/Javascript-Chile',
      },
      talk: 'https://github.com/fforres/PamBot',
    }, {
      title: 'El Javascripto y los Emuladores de la Muerte',
      descripcion: 'JavaScript y ReactNative para el 2016',
      fecha: '20 Nov 2015',
      organizacion: {
        nombre: 'Seminario de Ingeniería SEIS - Universidad del BioBio',
        link: 'http://www.ubiobio.cl/w',
      },
      talk: 'https://github.com/fforres/presentaciones-y-charlas/tree/gh-pages/Congreso_chillan',
    }, {
      title: 'Una hi-JS-storia de amor y odio',
      descripcion: 'Una historia amor y odio con Javascript, de jQuery a Noders',
      fecha: '24 Oct 2015',
      organizacion: {
        nombre: 'IV Devs - IVChallenge 2015',
        link: 'https://www.facebook.com/groups/programadores.iv.region.chile',
      },
      talk: 'https://github.com/fforres/presentaciones-y-charlas/tree/gh-pages/ProgramadoresIV',
    }, {
      title: 'Jornadas Informáticas - Ovalle',
      descripcion: 'Presentación para nuevos estudiantes a Ingeniería',
      fecha: '4 Sept 2015',
      organizacion: {
        nombre: 'Universidad Santo Tomás',
        link: 'https://www.santotomas.cl/ust',
      },
      talk: 'https://github.com/fforres/presentaciones-y-charlas/tree/gh-pages/Ovalle',
    }, {
      title: 'Comunidades de Software como motor de desarrollo',
      descripcion: 'Una mirada a las Comunidades de Software -> ¿Comunidades === Partido de Futbol?',
      fecha: '30 Jun 2015',
      organizacion: {
        nombre: 'DevCon Chile 2015',
        link: 'http://www.devconchile.org/',
      },
      talk: 'https://github.com/fforres/presentaciones-y-charlas/tree/gh-pages/DevCon',
    }];
  }
  render() {
    const talks = this.state.talks.map((el, i) => (
      <Talk talk={el} key={i} />
    ));
    return (
      <div className={style.talksArea}>
        <div className={style.container}>
          { talks }
        </div>
      </div>
    );
  }
}

export default Talks;
