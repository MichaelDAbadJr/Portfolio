import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/junmike.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = section => {
    setActiveMenu(section);
    setIsMenuOpen(false); // Close the menu after a click
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" id="jun-navbar" />
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt="Open Menu"
        className={`nav-mob-open ${isMenuOpen ? 'hidden' : ''}`}
      />
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <img
          src={menu_close}
          onClick={toggleMenu}
          alt="Close Menu"
          className={`nav-mob-close ${isMenuOpen ? 'visible' : 'hidden'}`}
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick('home')}>Home</p>
          </AnchorLink>
          {activeMenu === 'home' ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick('about')}>About Me</p>
          </AnchorLink>
          {activeMenu === 'about' ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleMenuClick('services')}>Services</p>
          </AnchorLink>
          {activeMenu === 'services' ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleMenuClick('work')}>Portfolio</p>
          </AnchorLink>
          {activeMenu === 'work' ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick('contact')}>Contact</p>
          </AnchorLink>
          {activeMenu === 'contact' ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
