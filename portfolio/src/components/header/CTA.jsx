import React from 'react'
import PRAKASH_KUMAR from '../../assets/PRAKASH_KUMAR.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={PRAKASH_KUMAR} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

