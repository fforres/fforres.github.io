import React, { Component, Fragment } from "react";

class Project extends Component<any> {
  state = {
    shown: false,
  };

  showMoreInfo = () => {
    this.setState({
      shown: !this.state.shown,
    });
  };

  render() {
    const { project } = this.props;
    const { img, link, title } = project;
    return (
      <Fragment>
        <a
          className="project"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="picture" />
          <div className="cover">
            <span className="coverText">{title}</span>
          </div>
        </a>
        <style jsx>
          {`
          .project {
            max-width: 20rem;
            margin: 0.5rem;
            position: relative;
            width: 50%;
            height: 15rem;
            overflow: hidden;
            display: inline-flex;
            position: relative;
            border-width: 1px;
            border-radius: 2px;
            box-shadow: 0 2px 4px 2px rgba(0,0,0,0.1);

          }

          .cover {
            position: absolute;
            bottom: 0;
            padding-left: 0.5em;
            padding-right: 0.5em;
            padding-top: 0.5em;
            padding-bottom: 0.5em;
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
          }

          .coverText {
            font-size: 0.7rem;
            color: lightgray;
          }

          @media (max-width: 64em) {
            .project {
              width: 13em;
              height: 7.64em;
            }
          }

          @media (max-width: 45em) {
            .project {
              width: 10em;
              height: 5.88em;
            }
          }
          .picture {
            position: absolute;
            background-image: url('/static/${img}.jpeg');
            background-image: url('/static/${img}.webp');
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
          }
        `}
        </style>
      </Fragment>
    );
  }
}

export default Project;
