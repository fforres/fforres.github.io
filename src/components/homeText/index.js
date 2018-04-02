import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

export class Landing extends Component {
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
              className={ style.link }
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
              className={ style.link }
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
              className={ style.link }
              href="https://groupon.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Groupon</span>
            </a>
            <span> and </span>
            <a
              className={ style.link }
              href="https://axiomzen.co"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span> AxiomZen </span>
            </a>
            <span> but nowadays I work at </span>
            <a
              className={ style.link }
              href="https://segment.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span> Segment </span>
            </a>
            <span>
              making all sorts of cool and geek things using JS, with an amazing
              group of people! (
            </span>
            <a
              className={ style.link }
              href="https://segment.com/team"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>you can check them here!</span>
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
              className={ style.link }
              href="https://www.meetup.com/es/Javascript-Chile/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>JSMeetups in Santiago</span>
            </a>
            <span>, the </span>
            <a
              className={ style.link }
              href="http://nodeschool.cl"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>NodeSchool Santiago</span>
            </a>
            <span> events, and why I started </span>
            <a
              className={ style.link }
              href="http://noders.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Noders.</span>
            </a>
          </p>
          <p className={ style.paragraph }>
            <span>I also enjoy </span>
            <Link className={ style.link } href="/projects" sasd>
              giving talks and presentations.
            </Link>
          </p>

          <p className={ style.paragraph }>
            <span>
              On my free time I teach JS, I'm learning how to Longboard, hike
              whenever I can, and sometimes post on
            </span>
            <a
              className={ style.link }
              href="https://twitter.com/fforres"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span> twitter</span>
            </a>
            <span> and on </span>
            <a
              className={ style.link }
              href="https://www.facebook.com/fforr.es"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>facebook.</span>
            </a>
          </p>
          <p className={ style.paragraph }>
            <span>
              I've worked at various startups and with very interesting people,
              you can read more
            </span>
            <span> on my </span>
            <a
              className={ style.link }
              href="http://cl.linkedin.com/in/fforres"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>linkedin profile</span>
            </a>
            <span> or by looking onto </span>
            <a
              className={ style.link }
              href="https://drive.google.com/open?id=1zyPmrxMJmP61lOdVBh3kbQ8h_U56103bvQMx8NcJFlU"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>my cv</span>.
            </a>
          </p>
          <p className={ style.paragraph }>
            <span>
              If you have any questions, feedback or just want to say hi, you
              can send me one of those electronic emails thingies
            </span>
            <span> at </span>
            <a
              className={ style.link }
              href="mailto:felipe.torressepulveda@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>felipe.torressepulveda@gmail.com</span>.
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Landing
