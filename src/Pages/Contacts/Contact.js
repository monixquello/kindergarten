import React from 'react';
import '../Contacts/Contacts.css';
import contact_image from '../../assets/contactimage.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';

const Contacts = () => {
  return (
    <div className="contacts">
      <Navbar/>
      <img src={contact_image} alt=''></img>
      <h2>For More inquiries</h2>

      <div className="contact-info">
        <div className='form-card'>
          <Form/>
        </div>
       <div>
        <h5>Contact Us</h5>
       <div className="address">
          <h3>Address:</h3>
          <p>Kabalagala, Uganda</p>
          <p>P.O Box 234</p>
        </div>
        <div className="phone">
          <h3>Phone:</h3>
          <p>+256 707 178724</p>
        </div>
        <div className="email">
          <h3>Email:</h3>
          <p>daystar@gmail.com</p>
        </div>
       </div>
      </div>
      <Footer/>

    </div>

  );
}

export default Contacts;
