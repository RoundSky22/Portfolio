import React from 'react'
import projects from '../../utils/projects'
import { BoxProjects,
    TitleProjects,
    ProjectCards,
    ProjectCard,
    ProjectImage,
    ProjectTitle
 } from './ProjectShowStyle'

const ProjectShow = () => {
  return (

    <BoxProjects>
    <TitleProjects>Some of the projects that I have been working on</TitleProjects>
    <ProjectCards>
      {projects.map((index)=>{
        return(
          <ProjectCard key={index.id}>
            <ProjectImage src = {index.img}></ProjectImage>
            <ProjectTitle>{index.title}</ProjectTitle>
          </ProjectCard>
        )

      
      })}
    </ProjectCards>
    
  </BoxProjects>
  )
}

export default ProjectShow