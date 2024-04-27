import React from 'react'
import '../../Pages/About/About.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Program from '../../components/Program/Program';


const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='about-section'>
        <h1>About Us</h1>
      </div>
      <div className='main-content'>
        <div className='left-content'>
          <h2>Our Mission</h2>
          <p><span>Nurturing Every Child's Potential:</span> Our mission is to provide
             a safe and supportive environment where every child can explore, learn, and grow to their fullest potential, fostering a love for lifelong
             learning and curiosity about the world around them.<br/><br/><br/>
          At our kindergarten, our mission is to lay strong foundations for academic, social, and emotional growth, empowering each child to become confident,
           compassionate, and capable individuals prepared for future success in school and beyond.
          </p>
        </div>
        <div className='right-content'>
        <h2>Our Vision</h2>

          <p>
           we envision a future where every child is empowered to reach their full potential, equipped with the skills, knowledge, and values needed to thrive in 
          a diverse and ever-changing world. We strive to be a beacon of excellence in early childhood education, inspiring a lifelong love for learning, fostering creativity and innovation, and nurturing compassionate, confident, and responsible individuals who 
          are active participants in their communities. <br/><br/>Through our commitment to continuous improvement, collaboration, and a supportive learning environment, we aspire to create a brighter future for generations to come, where every child's unique talents and contributions are valued and celebrated.
          </p>
        </div>
      </div>
      <Card/>
      <Program/>
      <Footer/>
    </div>
  )
}

export default About
