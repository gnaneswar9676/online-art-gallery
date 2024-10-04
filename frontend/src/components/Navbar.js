import React, { useState } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <input 
        className="menu-icon" 
        type="checkbox" 
        id="menu-icon" 
        name="menu-icon" 
        checked={isMenuOpen}
        onChange={() => setMenuOpen(!isMenuOpen)}
      />
      <label htmlFor="menu-icon"></label>
      
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <div  onClick={handleLinkClick}>
          {/* Logo will be added via CSS */}
        </div>
        <ul className="pt-5">
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/services" onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="/SwiperSlider" onClick={handleLinkClick}>Virtual Tours</Link></li>
          <li><Link to="/signin" onClick={handleLinkClick}>Signin</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
