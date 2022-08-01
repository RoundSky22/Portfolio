import styled from "styled-components";
import { devices } from "../utils/sizes";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  overflow:hidden;
`

export const Title = styled.h1`
font-size:75px;
  @media ${devices.laptop}{
    font-size:50px; 
  }
  @media ${devices.mobileM}{
    font-size:35px;
  }
`