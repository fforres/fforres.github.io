import Component from 'inferno-component';
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
      <div>
        <div className="row center">
          <div className="col-xs-8 col-xs-offset-2 text">
            <hr />
          </div>
        </div>
        <div className="row center section">
          <div className="col-xs-8 col-xs-offset-2 text">
            <h4>If you need a smaller resume, I have your back:</h4>
            <p>
              <ol>
                <li>My name is Felipe Torres</li>
                <li>I currently work at Groupon</li>
                <li>I love coding</li>
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
                    href="http://meetupjs.cl"
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
    );
  }
}

export default Landing;
