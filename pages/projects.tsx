import React, { Fragment, useState } from 'react'
import Router, { useRouter } from 'next/router'
import projectsData from '../components/Project/data.json'
import Project from '../components/Project'

const Projects: React.FC = () => {
  const project = useRouter()?.query?.project
  const [selectedProject, setSelectedProject] = useState<number>(Number(project))
  return (
    <Fragment>
      <section className="container">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="projectsContainer">
          {projectsData.map((el: any, i: number) => (
            <Project key={i} project={el} isSelected={selectedProject === i} onClick={() => {
              setSelectedProject(i)
              const href = `/projects?project=${i}`
              const as = href
              Router.push(href, as, { shallow: true })
            }} />
          ))}
        </div>
      </section>
      <style jsx>{`
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
        `}</style>
    </Fragment>
  )
}

export default Projects
