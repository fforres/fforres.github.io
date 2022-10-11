import React, { Component, Fragment } from "react";
import Project from "../components/Project";
import projectsData from "../components/Project/data.json";

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <section className="container">
          <div>
            <h1>Projects</h1>
          </div>
          <div className="projectsContainer">
            {projectsData.map((el: any, i: number) => <Project key={i} project={el} />)}
          </div>
        </section>
        <style jsx>
          {`
          h1 {
            margin-top: 2rem;
            margin-bottom: 3rem;
            text-align: center;
          }
          .projectsContainer {
            max-width: 1100px;
            width: 100%;
            display: flex;
            margin-bottom: 3rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-left: 3rem;
            padding-right: 3rem;
          }
        `}
        </style>
      </Fragment>
    );
  }
}

export default Projects;
