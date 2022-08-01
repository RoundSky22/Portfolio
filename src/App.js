import React from "react";
import projects from "./utils/projects";
import { Contacts,AboutMe,ProjectShow,FirstInfo,Container,Title } from "./components/Exports";


function App() {
  return (
    <div className="App">
      <Container>
        <Title>Portfolio</Title>
        {/* Info and picture*/}

        <FirstInfo/>

        {/* Projects*/}

        <ProjectShow/>

        {/* About me*/}

        <AboutMe/>

        {/*Socials*/}

        <Contacts/>        

      </Container>
    </div>
  );
}












export default App;
