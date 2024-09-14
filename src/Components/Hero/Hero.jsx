import React from 'react';
import './Hero.css';
import profilePic from '../../images/profile-pic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profilePic} alt="" />
      <h1>
        <span>I'm Jun Michael,</span> Full Stack Software Engineer based in USA.
      </h1>
      <p>
      Hello! I'm a passionate Full Stack Software Engineer with a knack for building robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I bring a holistic approach to software development. Here&rsquo;s a glimpse into my skill set and experience:
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
