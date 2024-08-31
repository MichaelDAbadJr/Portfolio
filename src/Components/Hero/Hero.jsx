import React from 'react';
import './Hero.css';
import profilePic from '../../images/profile-pic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profilePic} alt="" />
      <h1>
        <span>I'm Jun Michael,</span> Full Stack Software Engineer based in USA.
      </h1>
      <p>I enjoy making responsive websites and apps that clients love. I have 5 years of experience in the software development life cycle</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
