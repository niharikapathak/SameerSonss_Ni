import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css";
import symbol from '../images/symbol.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="main-nav">
      <div className='logo'>
        <h2>
          <NavLink exact to='/' activeClassName="active-link">
            <img src={symbol} alt="Symbol" className="symbol-img" /> Sameer<span>&</span>Sons
          </NavLink>
        </h2>
      </div>

      <div className={`menu-link ${isMobile ? 'mobile-menu-link show' : ''}`}>
        <ul onClick={() => setIsMobile(false)}>
          <li>
            <NavLink exact to='/' activeClassName="active-link">Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName="active-link">About Us</NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName="active-link">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to='/rnd' activeClassName="active-link">R&D</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to='#' activeClassName="active-link">Products</NavLink>
            <div className="dropdown-content">
              <NavLink to="/products/reactive-me-dyes" activeClassName="active-link">Reactive ME Dyes</NavLink>
              <NavLink to="/products/rgb-rr-dyes" activeClassName="active-link">RGB</NavLink>
              <NavLink to="/products/reactive-he-dyes" activeClassName="active-link">Reactive HE Dyes</NavLink>
              <NavLink to="/products/vinylsulphone-dyes" activeClassName="active-link">VinylSulphone Dyes</NavLink>
              <NavLink to="/products/premium-dyes" activeClassName="active-link">Premium Dyes</NavLink>
              <NavLink to="/products/direct-dyes" activeClassName="active-link">Direct Dyes</NavLink>
              <NavLink to="/products/reactive-cold-dyes" activeClassName="active-link">Reactive Cold Dyes</NavLink>
              <NavLink to="/products/printing-dyes" activeClassName="active-link">Printing Dyes</NavLink>
              <NavLink to="/products/pigmentauxiliares" activeClassName="active-link">Pigment/Textile Auxiliaries</NavLink>
              <NavLink to="/products/pigment-dyes" activeClassName="active-link">Pigment Dyes</NavLink>
              <NavLink to="/products/disperse-dyes" activeClassName="active-link">Disperse Dyes</NavLink>
              <NavLink to="/products/AcidBase" activeClassName="active-link">Acid Base Dyes</NavLink>
              <NavLink to="/products/napthol-base" activeClassName="active-link">Napthol Base</NavLink>
            </div>
          </li>
        </ul>
      </div>

      <div className='enquiry-btn'>
        <button>
          <NavLink to='/EnquireForm' activeClassName="active-link" className="enquiry-now">Enquire Now</NavLink>
        </button>
      </div>

      <div className="hamburger-menu" onClick={handleClick}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
