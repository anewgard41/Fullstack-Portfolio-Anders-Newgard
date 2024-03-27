import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Want to collaborate? <br className='sm:block hidden'/>
        Let's build something together.</p>
        <Link to="/contact" className='btn'>Contact</Link>
    </section>
  )
}

export default CallToAction