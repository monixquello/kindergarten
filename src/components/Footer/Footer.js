import React from 'react'
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <h6>DayStar</h6>
        <p>DayStar is a prominent daycare facility located in Kabalagala,
        we cater to an average of 150 babies daily, all under the attentive care of our well-trained Sitters
        </p>
      </div>
      <div className='footer-links'>
        <h5>Footer links</h5>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contacts</li>
        </ul>
      </div>
      <div className='footer-contact'>
        <h3>Contact Us</h3>
        <p>Daystar</p>
        <p>Kabalagala, Uganda</p>
        <p>P.O Box 1222</p>
        <span>Email:</span><br/>
        <span>daystar@gmail.com</span>
      </div>
    </div>
  )
}

export default Footer
