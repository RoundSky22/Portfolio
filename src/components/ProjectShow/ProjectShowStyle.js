import styled from "styled-components";
import { devices } from "../../utils/sizes";


export const BoxProjects = styled.div`
  margin-top:100px;
  background:white;
`


export const TitleProjects = styled.h2`
    text-align:center;
    margin-bottom:10px;
`

export const ProjectCards = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    margin-left:25px;
    margin-right:25px;
    max-width:2000px;
    @media ${devices.laptop}{
      grid-template-columns:repeat(2,1fr);
    }
    @media ${devices.mobileM}{
    grid-template-columns:repeat(1,1fr);
  }
`


export const ProjectCard = styled.div`
  margin-left:10px;
  margin-top:20px;
  margin-bottom:5px;
  @media ${devices.laptop}{
      margin-left:40px;
      
    }
`

export const ProjectImage = styled.img`
    display:block;
    width:90%;
    cursor:pointer;
    &:hover{
      opacity:0.5;
      transition:all 0.25s ease-in
    }
`

export const ProjectTitle = styled.h1`

`