import React from 'react'
import styled from 'styled-components'
import Pimage from '../../utils/Portfolio_picture.jpg'
import { devices } from '../../utils/sizes'
import { Box,Image,InfoText } from './FirstInfoStyle'



const FirstInfo = () => {
  return (
    <Box>
        
          <Image src={Pimage}/>
          <InfoText>
            <p>Greetings👋 </p>
            <p>I am Beres Tamas from MarosVasarhely an aspiring developer.</p>
            <p>Studying Computer Science 💻 at Sapientia University</p>

          </InfoText >
    </Box>
  )
}



export default FirstInfo