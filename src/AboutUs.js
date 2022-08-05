import React from 'react';
import Navbar from './Navbar';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <header className='Header'>
            <h1>About Us</h1>
        </header>
        <Navbar />
        <h3>From the pictures in the Pictures tab, that is just a small taste of the photography we do. Send a message throught the Contact Us link to get started</h3>
    </div>
  );
}

export default AboutUs;