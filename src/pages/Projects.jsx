import React from 'react'
import Title from '../components/Title'
import projects from '../data/projects'
import ProjectItem from '../components/home/ProjectItem'

const Projects = () => {
  return (
    <section className='max-w-5xl mx-auto w-11/12'>
      <Title className="text-center pb-3">Projects</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          projects.map((project,index) => (
            <ProjectItem key={index} name={project.name} img={project.img} tech={project.tech} workUrl={project.workUrl} demoUrl={project.demoUrl} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects