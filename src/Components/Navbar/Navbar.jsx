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

      {/* Menu open button */}
      {!isMenuOpen && (
        <img
          src={menu_open}
          onClick={toggleMenu}
          alt="Open Menu"
          className="nav-mob-open"
        />
      )}

      {/* Navigation menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Menu close button */}
        {isMenuOpen && (
          <img
            src={menu_close}
            onClick={toggleMenu}
            alt="Close Menu"
            className="nav-mob-close"
          />
        )}

        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => handleMenuClick('home')}
          >
            <p>Home</p>
          </AnchorLink>
          {activeMenu === 'home' && (
            <img src={underline} alt="Underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => handleMenuClick('about')}
          >
            <p>About Me</p>
          </AnchorLink>
          {activeMenu === 'about' && (
            <img src={underline} alt="Underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#work"
            onClick={() => handleMenuClick('work')}
          >
            <p>Work</p>
          </AnchorLink>
          {activeMenu === 'work' && (
            <img src={underline} alt="Underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={() => handleMenuClick('services')}
          >
            <p>Services</p>
          </AnchorLink>
          {activeMenu === 'services' && (
            <img src={underline} alt="Underline" className="underline" />
          )}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => handleMenuClick('contact')}
          >
            <p>Contact</p>
          </AnchorLink>
          {activeMenu === 'contact' && (
            <img src={underline} alt="Underline" className="underline" />
          )}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Let's Connect
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
