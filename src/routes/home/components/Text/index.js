import Component from 'inferno-component';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="row center section" id="hi">
        <div className="col-xs-8 text">
          <p>
            My name is <b>Felipe Torres.</b> I'm a
            <a
              href="https://github.com/fforres"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >software engineer</a> by choice, an educator at heart
            <span className="red">
              <i className="fa fa-fw fa-heart" />
            </span>. I'm very passionate about software communities.
            A Chilean living in
            <a
              href="https://es.wikipedia.org/wiki/Santiago_de_Chile"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            > Santiago de Chile.</a>
          </p>
          <p>
            More than anything I enjoy solving problems using technology,
            I'm the kind of person that gets bored without a challenge.
            I currently work at Groupon, which it has a lot of interesting
            problems to solve.
          </p>
          <p>
            I like working with interesting people,
            learning, teaching and being able to communicate that,
            that's why I run the
            <a
              href="http://meetupjs.cl"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >JSMeetups in Santiago</a>, do the
            <a
              href="http://nodeschool.cl"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >NodeSchool Santiago</a> events, and why I started
            <a
              href="http://noders.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >Noders</a>.

          </p>
          <p>
            On my free time I co-host a podcasts,
            I'm taking salsa lessons and hike whenever I can, sometimes I post on
            <a
              href="https://twitter.com/fforres"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >twitter</a> and on
            <a
              href="https://www.facebook.com/fforr.es"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >facebook</a>
          </p>
          <p>
            I've worked at various startups and with very interesting people, you can read more on my
            <a
              href="cl.linkedin.com/in/fforres"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >linkedin profile</a> or by looking onto
            <a
              href="https://drive.google.com/file/d/0B0-c8vrue2QqdTFoVTB2bmw1aVU/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >my cv</a>.
          </p>
          <p>
            If you have any questions, feedback or just want to say hi, (That would be awesome) you can mail me at
            <a
              href="mailto:felipe.torressepulveda@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >felipe.torressepulveda@gmail.com</a>.

          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
