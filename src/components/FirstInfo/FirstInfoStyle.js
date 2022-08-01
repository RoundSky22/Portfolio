import styled from "styled-components";
import { devices } from "../../utils/sizes";
import {light} from '../../utils/modes'
import {dark} from '../../utils/modes'

export const Box = styled.div`
  background:${props => props.mode=="dark" ? "black" : "white"};
  margin-top:2.5rem;
  display:flex;
  justify-content:start;
  align-items:center;
  border-radius:2%;
  width:60%;
  font-size:25px;
  text-align:center;

  @media ${devices.laptop}{
    width:90%; 
  }
  @media ${devices.mobileM}{
    width:100%;
    flex-direction:column;

  }
  
`

export const Image = styled.img`
  display:block;
  height:20%;
  width:20%;
  border-radius:30%;
  margin-left:15%;
  @media ${devices.mobileM}{
  height:30%;
  width:45%;
  margin:auto
    
  }
`


export const InfoText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;  
    margin-left:5rem;
    margin-right:5rem;
    @media ${devices.mobileM}{
    width:100%;
    flex-direction:column;
    font-size:25px;
    text-align:center
  }
`