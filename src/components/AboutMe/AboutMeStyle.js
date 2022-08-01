import styled from "styled-components"
import { devices } from "../../utils/sizes"

export const About_Me = styled.div`

background:white;
  margin-top:2.5rem;
  display:flex;
  justify-content:start;
  align-items:center;
  border-radius:2%;
  width:60%;
  font-size:25px;

  p{
    text-align:center;
    margin-bottom:10px;
  }

  @media ${devices.laptop}{
    width:90%; 
  }
  @media ${devices.mobileM}{
    width:100%;
    flex-direction:column;

  }

    flex-direction:column;
    width:75%;
    font-size:25px;
    p{
      margin-top:10px
    }
    @media ${devices.laptop}{
      width:100%;
    }
`

export const TitleAboutMe = styled.h1`
    text-align:center;
    font-size:50px;
  @media ${devices.laptop}{
    font-size:50px; 
  }
  @media ${devices.mobileM}{
    font-size:35px;
  }
`