import React from 'react'
import styled from 'styled-components'
import Pimage from '../../utils/Portfolio_picture.jpg'
import { devices } from '../../utils/sizes'
import { Box,Image,InfoText } from './FirstInfoStyle'



const FirstInfo = ({mode}) => {
  console.log(mode)
  console.log(typeof(mode))
  return (
    <Box>
          <Image src={Pimage} mode={mode}/>
          <InfoText mode={mode}>
            <p>Greetings👋 </p>
            <p>I am Beres Tamas from MarosVasarhely an aspiring developer.</p>
            <p>Studying Computer Science 💻 at Sapientia University</p>

          </InfoText >
    </Box>
  )
}



export default FirstInfo