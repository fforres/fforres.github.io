import { h, Component } from 'preact';
import Division from '../Division';
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
      <div className={ style.resumeArea }>
        <Division />
        <div className={ style.container }>
          <h4 className={ style.title }>
            If you need a smaller resume, I <span>have your back</span>:
          </h4>
          <p className={ style.paragraph }>
            <ol>
              <li>My name is Felipe Torres.</li>
              <li>
                <span>I currently work at </span>
                <span>
                  <a
                    className={ `${style.link} ${style.darkSlidingUnderline}` }
                    href="https://axiomzen.co"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    AxiomZen.
                  </a>
                </span>
              </li>
              <li>
                <a
                  className={ `${style.link} ${style.darkSlidingUnderline}` }
                  href="./talks.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  I Give Talks.
                </a>
              </li>
              <li>
                <a
                  className={ `${style.link} ${style.darkSlidingUnderline}` }
                  href="http://www.github.com/fforres"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  I love coding.
                </a>
              </li>
              <li>I really love JS & NodeJS.</li>
              <li>I also love teaching.</li>
              <li>
                <span>I do: </span>
                <a
                  className={ `${style.link} ${style.darkSlidingUnderline}` }
                  href="http://noders.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Noders
                </a>
                <span>, </span>
                <a
                  className={ `${style.link} ${style.darkSlidingUnderline}` }
                  href="https://www.meetup.com/es/Javascript-Chile/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  JSMeetups
                </a>
                <span>, </span>
                <a
                  className={ `${style.link} ${style.darkSlidingUnderline}` }
                  href="https://nodeschool.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  NodeSchool
                </a>
                <span>, </span>
                and Podcast.
              </li>
              <li>I like dancing Salsa.</li>
            </ol>
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
