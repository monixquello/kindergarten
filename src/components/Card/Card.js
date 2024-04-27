import React from 'react';
import '../Card/Card.css';
import infant from '../../assets/infants.jpg'; 
import toddler from '../../assets/toddler.jpg'; 
import preschool from '../../assets/preschool.jpg';


const Card = () => {
  return (
    <div className="card-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="cards-row">
        <div className="card">
          <img src={infant} alt="infant" className="card-image" />
          <button className="card-button">Infants</button>

          <div className="card-content">
            <p className="card-description">Nurturing young talents throught their growing stage</p>
          </div>
        </div>
        <div className="card">
          <img src={toddler} alt="toddler" className="card-image" />
          <button className="card-button">Toddlers</button>
          <div className="card-content">
            <p className="card-description">Training young talents with constructive plays</p>
          </div>
        </div>
        <div className="card">
          <img src={preschool} alt="preschool" className="card-image" />
          <button className="card-button">Preschool</button>

          <div className="card-content">
            <p className="card-description">We provide starting education principles for young talents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
