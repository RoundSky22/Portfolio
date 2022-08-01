import React from 'react'
import { 
    ConTitle,
    SocialLinks,
    SocialItem,
    ImageFacebook,
    ImageGithub,
    ImageLinkedin,
     
} from './ContactsStyle'

const Contacts = () => {
  return (
    <div>
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
    </div>
  )
}

export default Contacts