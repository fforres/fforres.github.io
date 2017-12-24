import { h, Component } from 'preact';
import style from './style.css';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div className={ style.textArea } id="hi">
        <div className={ style.paragraphsContainer }>
          <p className={ style.paragraph }>
            <span>
              My name is <b>Felipe Torres.</b>
            </span>
            <span> I&apos;m a </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://github.com/fforres"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>software engineer</span>
            </a>
            <span> by choice, an educator at heart </span>
            <span className="red">❤️</span>
            <span>. </span>
            <span>
              I&apos;m very passionate about software communities. A Chilean
            </span>
            <span> living in </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://es.wikipedia.org/wiki/Santiago_de_Chile"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Santiago de Chile.</span>
            </a>
          </p>
          <p className={ style.paragraph }>
            <span>
              More than anything I enjoy solving problems using technology,
              I&apos;m the kind of person that gets bored without a challenge or
              a cool proyect. I previously
            </span>
            <span> used to work for </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://groupon.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Groupon</span>
            </a>
            <span> but nowadays I work at </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://axiomzen.co"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span> AxiomZen </span>
            </a>
            <span>
              making all sorts of cool and geek things using JS, with an amazing
              group of people!
            </span>
            <span>(you can check them </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://www.axiomzen.co/about#team"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>here</span>
            </a>
            <span>).</span>
          </p>
          <p className={ style.paragraph }>
            <span>
              I like working with interesting people, learning, teaching and
              being able to communicate that, that&apos;s why I
            </span>
            <span> run the </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://www.meetup.com/es/Javascript-Chile/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>JSMeetups in Santiago</span>
            </a>
            <span> , the </span>
            <a
              className="link sliding-middle-out-dark"
              href="http://nodeschool.cl"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>NodeSchool Santiago</span>
            </a>
            <span> events, and why I started </span>
            <a
              className="link sliding-middle-out-dark"
              href="http://noders.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Noders.</span>
            </a>
          </p>
          <p className={ style.paragraph }>
            <span>I also enjoy </span>
            <a
              className="link sliding-middle-out-dark"
              href="./talks.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>giving talks and presentations.</span>
            </a>
          </p>

          <p className={ style.paragraph }>
            <span>
              On my free time I co-host a podcasts, I'm taking salsa lessons and
              hike whenever I can, sometimes
            </span>
            <span> I post on </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://twitter.com/fforres"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>twitter</span>
            </a>
            <span> and on </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://www.facebook.com/fforr.es"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>facebook. </span>
            </a>
          </p>
          <p className={ style.paragraph }>
            <span>
              I've worked at various startups and with very interesting people,
              you can read more
            </span>
            <span> on my </span>
            <a
              className="link sliding-middle-out-dark"
              href="http://cl.linkedin.com/in/fforres"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>linkedin profile</span>
            </a>
            <span> or by looking onto </span>
            <a
              className="link sliding-middle-out-dark"
              href="https://drive.google.com/open?id=1zyPmrxMJmP61lOdVBh3kbQ8h_U56103bvQMx8NcJFlU"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>my cv</span>.
            </a>
          </p>
          <p className={ style.paragraph }>
            <span>
              If you have any questions, feedback or just want to say hi, (That
              would be awesome) you can send me one of those electronic emails
            </span>
            <span> at </span>

            <a
              className="link sliding-middle-out-dark"
              href="mailto:felipe.torressepulveda@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>felipe.torressepulveda@gmail.com</span>.
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
