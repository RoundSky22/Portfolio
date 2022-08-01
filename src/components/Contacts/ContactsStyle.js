import styled from "styled-components";
import { devices } from "../../utils/sizes";
import {BsFacebook,BsGithub , BsLinkedin} from 'react-icons/bs'

export const SocialLinks = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
    @media ${devices.mobileM}{
    flex-direction:column
  }
`

export const SocialItem = styled.div`
      margin-left:10px;
`

export const ImageFacebook = styled(BsFacebook)`
  color:white;
  margin-bottom:10px;
  cursor:pointer;
`

export const ImageGithub = styled(BsGithub)`
  color:white;
  margin-bottom:10px;
  cursor:pointer;
`

export const ImageLinkedin = styled(BsLinkedin)`
  color:white;
  margin-bottom:10px;
  cursor:pointer;
`


export const ConTitle = styled.h1`
  padding:10px;
  font-size:50px;
`