import React from 'react'
import './Projects.css'
import ProjectsData from '../../data/ProjectsData'

function Projects() {
  const projectsMap = ProjectsData.map((project, i) => {
    return (
      <a href={project.link} key={i} className="project" target='_blank'>
        <img src={project.icon} />
        <h2 className='project-head'>{project.head}</h2>
      </a>
    )
  })

  return (
    <div className='projects-container'>
      <h1>My Projects</h1>
      <div className="projects-center">
        {projectsMap}
      </div>
    </div>
  )
}

export default Projects
