import React from 'react'
import {
    CCard,
    CButton,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText
    
  } from "@coreui/react";


const Card = () => {
  return (
    <>
    <CCard 
    style={{ width: '18rem' }}>
  <CCardImage 
  orientation="top" 
  src={'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'} />
  <CCardBody>
    <CCardTitle>{'Goa'}</CCardTitle>
    <CCardText>
      Rs. 11000/-
    </CCardText>
    <CButton href="/contact-us">Enquire Now</CButton>
  </CCardBody>
</CCard>
    </>
  )
}

export default Card