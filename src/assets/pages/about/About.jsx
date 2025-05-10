import React from 'react'
import ScrollIndicator from '../../components/ScrollIndicator'
import Top from './Top'
import AboutCompany from './AboutCompany'
import Evolution from './Evolution'
import Teams from './Teams'
import Testimonials from './Testimonials'

function About() {
  return (
    <>
      <ScrollIndicator sections={['top', 'about', 'evolution', 'team', 'testimonial']}/>
      <Top />
      <AboutCompany />
      <Evolution />
      <Teams />
      <Testimonials />
    </>
  )
}

export default About
