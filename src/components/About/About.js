import React from 'react'
import {Link} from 'react-router-dom'
import '../About/About.css';
import about_image from '../../assets/about-image.jpg';

const About = () => {
  return (
    <div className='about '>
      <h3>About Us</h3>
      <h2>What We Are</h2>
      <div className='about-content'>
        <img src={about_image} alt=''></img>
        <div className='about-text'>
        <p>Welcome to DayStar, a leading daycare facility nestled in the heart of Kabalagala. With a bustling environment,
           we cater to an average of 150 babies daily, all under the attentive care of our well-trained Sitters. At DayStar, 
           we prioritize the safety, well-being, and development of every child who walks through our doors.gennerate more onthis
        </p><br/>
        <p>
        We take pride in offering a diverse range of activities and educational opportunities designed to promote holistic 
        development in every child. From sensory exploration and creative arts to outdoor play and interactive learning experiences,
         we strive to create a dynamic and enriching environment where children can learn, grow, and discover the world around them.


        </p>
        </div>
       
      </div>
      <button><Link to='/about'>More About Us</Link></button>
    </div>
  )
}

export default About
