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
            <span><a
              href="https://github.com/fforres"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >software engineer</a></span> by choice, an educator at heart
            <span className="red">
              <i className="fa fa-fw fa-heart" />
            </span>. I'm very passionate about software communities.
            A Chilean living in
            <span><a
              href="https://es.wikipedia.org/wiki/Santiago_de_Chile"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >Santiago de Chile.</a></span>
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
            <span><a
              href="http://meetupjs.cl"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >JSMeetups in Santiago</a></span>, do the
            <span><a
              href="http://nodeschool.cl"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >NodeSchool Santiago</a></span> events, and why I started
            <span><a
              href="http://noders.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >Noders</a></span>.

          </p>
          <p>
            On my free time I co-host a podcasts,
            I'm taking salsa lessons and hike whenever I can, sometimes I post on
            <span><a
              href="https://twitter.com/fforres"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >twitter</a></span> and on
            <span><a
              href="https://www.facebook.com/fforr.es"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >facebook</a></span>
          </p>
          <p>
            I've worked at various startups and with very interesting people, you can read more on my
            <span><a
              href="cl.linkedin.com/in/fforres"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >linkedin profile</a></span> or by looking onto
            <span><a
              href="https://drive.google.com/file/d/0B0-c8vrue2QqdTFoVTB2bmw1aVU/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >my cv</a></span>.
          </p>
          <p>
            If you have any questions, feedback or just want to say hi, (That would be awesome) you can mail me at
            <span><a
              href="mailto:felipe.torressepulveda@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="link sliding-middle-out-dark"
            >felipe.torressepulveda@gmail.com</a></span>.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
