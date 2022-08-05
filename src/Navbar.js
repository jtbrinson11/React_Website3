import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
    <button className='btn'><Link to="/">Home</Link></button>
    <button className='btn'><Link to="/pics">Pictures</Link></button>
    <button className='btn'><Link to="/about">About Us</Link></button>
    <button className='btn'><Link to="/contact">Contact Us</Link></button>
    </div>
  );
}

export default Navbar;