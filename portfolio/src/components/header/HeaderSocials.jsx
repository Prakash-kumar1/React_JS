import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import {SiNetlify } from 'react-icons/si'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/prakash-kumar-386706242/" target= "_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Prakash-kumar1" target= "_blank" rel="noreferrer"><IoLogoGithub/></a>
        <a href="https://app.netlify.com/teams/prakash-kumar1/sites" target="_blank" rel="noreferrer"><SiNetlify/></a>
    </div>
  )
}

