import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpeg'
import { FaAward } from 'react-icons/fa'
import { RiUser3Line } from 'react-icons/ri'
import { TiFolder } from "react-icons/ti"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Education</h5>
                <small>MakhanLal Chaturvedi University, Bhopal</small>
                <small>Bachelor of Computer Application.</small>
              </article>

              <article className='about__card'>
                <RiUser3Line className='about__icon'/>
                <h5>Passionate Developer</h5>
                <small>I like to do Coding and Solving problems.</small>
              </article>

              <article className='about__card'>
                <TiFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>

            <p>I am Prakash Kumar currently learning Mern stack Development at Aircampus. I’m looking to use my technical skills to add value for the company. I want to add value to the company as a frontend engineer and I will be taking complete accountability and ownership of my work.I am
passionate about my work and always try to learn new things to improve myself day by day.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About