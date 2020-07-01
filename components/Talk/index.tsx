import React, { Component, Fragment } from "react";
import InlineLink from "../InlineLink";
import Hr from "../Hr";

class Talk extends Component<any> {
  render() {
    return (
      <Fragment>
        <div className="talk">
          <div className="title">
            <h2>
              <InlineLink
                href={this.props.talk.organizacion.link as string}
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.props.talk.organizacion.nombre}
              </InlineLink>
            </h2>
            <div className="fecha"> {this.props.talk.fecha} </div>
          </div>
          <div className="talkTitle">
            <span>{this.props.talk.title}</span>
            <span className="talkLink">
              {this.props.talk.talk.length ? (
                <a
                  className="link"
                  href={this.props.talk.talk}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  🔗
                </a>
              ) : null}
            </span>
          </div>
          <div className="descripcion"> {this.props.talk.descripcion} </div>
        </div>
        <Hr />
        <style jsx>{`
          .talk {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: flex-start;
            text-align: left;
          }

          .link {
            font-size: 0.8em;
            font-weight: 700;
            text-decoration: none;
            padding-bottom: 0.6rem;
            color: #0275d8;
            text-decoration: none;
          }

          .title {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
          }

          .title h2 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
          }

          .talkTitle {
            font-size: 1rem;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            margin-bottom: 0.75rem;
          }

          .talkLink {
            padding-left: 0.8em;
            font-weight: 300;
          }
          .descripcion {
            font-size: 0.75rem;
          }

          .fecha {
            margin-left: 1rem;
            font-size: 0.8rem;
            text-align: right;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Talk;
