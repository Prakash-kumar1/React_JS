import React from 'react'
import {SiNetlify } from 'react-icons/si'
import { IoLogoGithub } from 'react-icons/io'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Prakash Kumar</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://app.netlify.com/teams/prakash-kumar1/sites" target="_blank" rel="noreferrer"><SiNetlify/></a>
      <a href="https://www.linkedin.com/in/prakash-kumar-386706242/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Prakash-kumar1" target= "_blank" rel="noreferrer"><IoLogoGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Created by Prakash Kumar.</small>
      </div>
    </footer>
  )
}

export default Footer