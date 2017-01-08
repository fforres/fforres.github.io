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
      <div className="landing row">
        <div className="photoBackground fullheight"></div>
        <div className="title">
          <h1 className="hola">I'm fforres!</h1>
          <p className="presentacion">
            <span>I enjoy</span>
            <span><a href="http://github.com/fforres" target="_blank" className="link sliding-middle-out">coding,</a></span>
            <span><a href="http://nodeschool.cl" target="_blank" className="link sliding-middle-out">teaching</a></span>
            <span>&</span>
            <span><a href="http://meetupjs.cl" target="_blank" className="link sliding-middle-out">hosting events</a></span>
          </p>
          <p className="presentacion">
            <a href="//fforr.es/gpn" className="link sliding-middle-out">I also made a "Groupon Coupon Site" selling well... me </a>
          </p>
          <p>
            <a id="tohi" href="#hi">
              <i className="fa fa-fw fa-caret-down"></i>
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Landing;
