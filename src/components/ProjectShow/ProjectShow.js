import React from 'react'
import projects from '../../utils/projects'
import { BoxProjects,
    TitleProjects,
    ProjectCards,
    ProjectCard,
    ProjectImage,
    ProjectTitle,
    ContextBox,
    TechImage,
    ReactIcon,
    ContentText,
    NodeIcon,
    StyleC
 } from './ProjectShowStyle'


const Checker = (word) =>{
    
}


const ProjectShow = () => {
  return (

    <BoxProjects>
    <TitleProjects>Some of the projects that I have been working on</TitleProjects>
    <ProjectCards>
      {projects.map((index)=>{
        return(
          <ProjectCard key={index.id}>

              <a href={index.link}>
              <ContextBox>
              <ContentText>Used Technologies:</ContentText>  
                <TechImage>
                  {index.createdWith.includes("REACT") ? 
                  <ReactIcon size={62}/>
                  :
                  console.log()
                }

                {index.createdWith.includes("NODE") ? 
                  <NodeIcon size={62}/>
                  :
                  console.log()
                }

                {index.createdWith.includes("STYLEC") ? 
                      <StyleC size={62 }></StyleC>
                    
                  :
                  console.log()
                }
                </TechImage>
              </ContextBox>

              
              <ProjectImage src = {index.img}></ProjectImage>
              </a>
            
            <ProjectTitle>{index.title}</ProjectTitle>
           
          </ProjectCard>
        )
      })}
    </ProjectCards>
    
  </BoxProjects>
  )
}

export default ProjectShow