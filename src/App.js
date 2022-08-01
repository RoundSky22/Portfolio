import React from "react";
import projects from "./utils/projects";
import { Contacts,AboutMe,ProjectShow,FirstInfo,Container,Title } from "./components/Exports";
import {useState} from 'react'
import Switch from '@mui/material/Switch/Switch'
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel'

function App() {

  const [darkmode , setDarkMode] = useState("light");

  const handleClick = (e) =>{
    if(darkmode==="light"){
      setDarkMode("dark")
    }
    else{
      setDarkMode("light")
    }
    console.log(darkmode)
  }


  return (
    <div className="App">
      <Container>
        <Title>Portfolio</Title>
        {/*<button onClick= {handleClick}>CLick</button>*/}
        {/* Info and picture*/}
        <FirstInfo mode={darkmode}/>


        <ProjectShow mode={darkmode}/>


        <AboutMe mode={darkmode}/>

        <Contacts mode={darkmode}/>

      
    
                

      </Container>
    </div>
  );
}












export default App;
