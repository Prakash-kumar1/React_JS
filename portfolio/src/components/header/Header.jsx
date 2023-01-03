import React from 'react'
import {CTA} from './CTA'
import linkedin from "../../assets/linkedin.jpeg"
import {HeaderSocials} from './HeaderSocials'
import './headernew.css'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='container__header'>
          <div className="header__title">
            <h5>Hello I'm</h5>
            <h1>Prakash Kumar</h1>
            <h5 className='text-light'>Computer Science Student</h5>
            <CTA />
          </div>
          <div className="header__container">
            <HeaderSocials className="header__social" />
            <div className="me">
              <img src={linkedin} alt="me" className='me-img' />
            </div>
            <div className="scroll">
              <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header