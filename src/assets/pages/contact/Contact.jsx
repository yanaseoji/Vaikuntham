import React from 'react'
import ScrollIndicator from '../../components/ScrollIndicator'
import Top from './Top'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <>
      <ScrollIndicator sections={['top', 'contactInfo', 'contactForm']}/>
      <Top />
      <ContactInfo />
      <ContactForm />
    </>
  )
}

export default Contact
