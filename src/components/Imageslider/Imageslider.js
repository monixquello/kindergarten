import React, { useState } from 'react';
import '../Imageslider/Imageslider.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import slider_1 from '../../assets/slider-1.jpg';
import slider_2 from '../../assets/slider-3.jpg';
import slider_3 from '../../assets/slider-4.jpg';
import slider_4 from '../../assets/slider-2.jpg';
import slider_5 from '../../assets/slider-5.jpg';
import slider_6 from '../../assets/slider-6.jpg';

const Imageslider = () => {
  const images = [slider_1, slider_2, slider_3, slider_4, slider_5, slider_6];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  }

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  }

  return (
    <div>
      <h3 className='image-header'>Gallery</h3>
      <p className='header-description'>Welcome to our gallery, where moments come to life. Explore a vibrant collection of images capturing the joy,
         laughter, and cherished memories shared at DayStar. From playful activities to heartwarming interactions, each snapshot tells a story of love and learning.</p>
      <div className='imageslider'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
        <img src={images[currentSlide]} alt={`slider-${currentSlide + 1}`} className='slide'/>
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      </div>
    </div>
  );
}

export default Imageslider;
