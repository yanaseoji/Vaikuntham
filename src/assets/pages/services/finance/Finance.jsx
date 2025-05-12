import React from 'react'
import ScrollIndicator from '../../../components/ScrollIndicator'
import Top from './Top'
import Work from './Work'
import Services from './Services'
import ConsultationForm from './ConsultationForm'

function Finance() {
  return (
    <>
        <ScrollIndicator sections={['top', 'work', 'services', 'contactForm']}/>
        <Top/>
        <Work/>
        <Services/>
        <ConsultationForm/>
    </>
  )
}

export default Finance

