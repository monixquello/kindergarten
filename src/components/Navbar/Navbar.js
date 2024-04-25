import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className='navbar navbar-expand-lg '>
        <div className="container">
          <h3 className='navbar-brand logo mr-auto'><Link to='/home'>DayStar</Link></h3>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>About us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/gallery'>Gallery</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </li>
            </ul>
            <button className='btn btn-outline-light ml-3'>Inquiries</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
