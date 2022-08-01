import styled from "styled-components";
import { devices } from "../../utils/sizes";
import {FaReact,FaNodeJs, FaNode} from 'react-icons/fa'
import { Styledcomponents } from "styled-icons/simple-icons";


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
    width:90%;
    height:79%;
    cursor:pointer;
    &:hover{
      opacity:0.5;
    }
`
export const ContextBox = styled.div`
    background:#6DFBFD;
    z-index:100;
    position:absolute;
    width:28.7%;
    height:30.8%;
    opacity:0;
    &:hover{
      opacity:0.8;
      transition:all ease-in 0.23s; 
    }

    @media ${devices.laptop}{
      width:39.25%;
      height:25.5%;
    }


    @media ${devices.tabletM}{
      width:35.8%;
      height:16.2%;

    }
    @media ${devices.mobileM}{
      position:none;
      width:0;
      height:0;
      &:hover{
      opacity:0;
    }
  }

   

`

export const TechImage = styled.div`
      display:grid;
      grid-template-columns:repeat(5,1fr);
      margin-left:15px;
      gap:10px;
      margin-top:5px;
      margin-right:75%;
      margin-left:50px;
     
    

`

export const ReactIcon = styled(FaReact)`
    display:flex;
    align-items:center;
`

export const NodeIcon = styled(FaNodeJs)`
    display:flex;
    align-items:center;
`

export const ContentText = styled.p`
    font-size:20px;
    text-align:left;
    margin-top:150px;
    margin-left:5%;
    @media ${devices.laptop}{
      margin-top:110px;
    }

    @media ${devices.tabletM}{
      margin-top:50px;

    }
    
`

export const ProjectTitle = styled.h1`

`

export const StyleC = styled(Styledcomponents)`
      display:flex;
      align-items:center;
` 
