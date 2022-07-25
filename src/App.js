import React from "react";
import styled from "styled-components";
import Pimage from "./utils/Portfolio_picture.jpg"
import projects from "./utils/projects";
import {BsFacebook,BsGithub , BsLinkedin} from 'react-icons/bs'


function App() {
  return (
    <div className="App">
      <Container>
        <Title>Portfolio</Title>

        {/* Info and picture*/}
        <Box>
        
          <Image src={Pimage}/>
          <InfoText>
            <p>Greetings👋 </p>
            <p>I am Beres Tamas from MarosVasarhely an aspiring developer.</p>
            <p>Studying Computer Science 💻 at Sapientia University</p>

          </InfoText >
        </Box>



        {/* Projects*/}

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

        {/* About me*/}

        
        <About_Me>
          <TitleAboutMe>About me</TitleAboutMe>
          <p>I like to learn new things,information of anykind <b>but</b> its a big plus if it's technology related</p>
          <p>I enjoy traveling and seeing new places,experiencing other cultures</p>
          <p>I like working with people ,towards the same goal ,because you can learn alot from each other </p>
          <p>I love technology ,maybeI am a bit tech savy</p>
          
        </About_Me>



        {/*Socials*/}

        <ConTitle>Contacts</ConTitle>

        <SocialLinks>
          <SocialItem>
            <a  href='https://www.facebook.com/beres.tamas.9678 ' target="_blank">
              <ImageFacebook size={32}></ImageFacebook>
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://github.com/RoundSky22" target="_blank">
            <ImageGithub size={32}></ImageGithub>
            </a>
          </SocialItem>
          <SocialItem>
            <a href="https://www.linkedin.com/in/b%C3%A9res-tam%C3%A1s-786716246/" target="_blank">
              <ImageLinkedin size={32}></ImageLinkedin>
            </a>
          </SocialItem>
        </SocialLinks>
        

      </Container>
    </div>
  );
}



const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  overflow:hidden;
`
const Title = styled.h1`

`

const Box = styled.div`
  background:white;
  margin-top:2.5rem;
  display:flex;
  justify-content:start;
  align-items:center;
  width:65%;
`

const Image = styled.img`
  display:block;
  height:20%;
  width:20%;
  border-radius:30%;
  
`


const InfoText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;  
    margin-left:5rem;
    margin-right:5rem;
`

const BoxProjects = styled.div`
  margin-top:100px;
  background:white;
`



const TitleProjects = styled.h2`
    text-align:center;
    margin-bottom:10px;
`

const ProjectCards = styled.div`
    display:grid;
    grid-template-columns:23rem 23rem 23rem;
    margin-left:25px;
    margin-right:25px;
`


const ProjectCard = styled.div`
  margin-left:10px;
  margin-top:20px;
`

const ProjectImage = styled.img`
    display:block;
    width:90%;
    cursor:pointer;
    &:hover{
      opacity:0.5;
      transition:all 0.25s ease-in
    }
`

const ProjectTitle = styled.h1`

`

const SocialLinks = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const SocialItem = styled.div`
      margin-left:10px;
`

const ImageFacebook = styled(BsFacebook)`
  color:white;
  margin-bottom:10px;
  cursor:pointer;
`

const ImageGithub = styled(BsGithub)`
  color:white;
  margin-bottom:10px;
  cursor:pointer;
`

const ImageLinkedin = styled(BsLinkedin)`
  color:white;
  margin-bottom:10px;
  cursor:pointer;
`


const ConTitle = styled.h1`
  padding:10px;
`

const About_Me = styled(Box)`
    flex-direction:column;
    p{
      margin-top:10px
    }
`
const TitleAboutMe = styled(Title)`
    text-align:center
`


export default App;
