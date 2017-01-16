import Component from 'inferno-component';
import Division from '../../../../components/Division';
import style from './style.css';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className={style.resumeArea}>
        <Division />
        <div className={style.container}>
          <div className="row center section">
            <div className="col-xs-8 col-xs-offset-2 text">
              <h4>If you need a smaller resume, I <span>have your back</span>:</h4>
              <p className={style.paragraph}>
                <ol>
                  <li>My name is Felipe Torres</li>
                  <li>I currently work at Groupon</li>
                  <li><a href="./talks.html">I Give Talks</a></li>
                  <li><a
                    href="http://www.github.com/fforres"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link sliding-middle-out-dark"
                  >I love coding</a></li>
                  <li>I really love JS & NodeJS</li>
                  <li>I also love teaching</li>
                  <li>I do:
                    <span><a
                      href="http://noders.com"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link sliding-middle-out-dark"
                    >Noders</a></span>,
                    <span><a
                      href="https://www.meetup.com/es/Javascript-Chile/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link sliding-middle-out-dark"
                    >JSMeetups</a></span>,
                    <span><a
                      href="http://nodeschool.cl"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="link sliding-middle-out-dark"
                    >NodeSchool</a></span> and Podcast</li>
                  <li>I like dancing Salsa</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
