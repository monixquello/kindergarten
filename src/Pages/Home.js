import React from 'react'

import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import ImageSlider from '../components/Imageslider/Imageslider';
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <About/>
      <ImageSlider/>
      <Footer/>
    </div>
  )
}

export default Home
