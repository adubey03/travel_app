import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider'
import Footer from '../components/Footer';
import './../styles/Homepage.css'
import About from '../components/About';

const Homepage = () => {
  return (
    <>
    <Header />
    <Slider />
    <About />
    <Footer />
    </>
  )
}

export default Homepage