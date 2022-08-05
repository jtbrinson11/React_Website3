import React from 'react';
import Navbar from "./Navbar";
import './Pics.css';
import scenery1 from './img/pic1.jpg';
import scenery2 from './img/pic2.jpg';
import scenery3 from './img/pic3.jpg';
import scenery4 from './img/pic4.jpg';
import scenery5 from './img/pic5.jpg';
import plane1 from './img/pic6.jpg';
import plane2 from './img/pic7.jpg';
import plane3 from './img/pic8.JPG';
import plane4 from './img/pic9.JPG';
import plane5 from './img/pic10.JPG';

const Pics = () => {
  return (
    <div className='Pics'>
        <header className='Header'>
            <h1>Pictures</h1>
        </header>
        <Navbar />
        <div>
            <img src={plane1} alt="Plane"/>
            <img src={plane2} alt="Plane"/>
            <img src={plane3} alt="Plane"/>
            <img src={plane4} alt="Plane"/>
            <img src={plane5} alt="Plane"/>
            <img src={scenery1} alt="Scenery"/>
            <img src={scenery2} alt="Scenery"/>
            <img src={scenery3} alt="Scenery"/>
            <img src={scenery4} alt="Scenery"/>
            <img src={scenery5} alt="Scenery"/>
        </div>
    </div>
  );
}

export default Pics;