import React from 'react';
import './Hero.css';
import profilePic from '../../images/profile-pic.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <img src={profilePic} alt="" />
      <h1>
        <span>I'm Jun Michael,</span> Full Stack Software Engineer based in USA.
      </h1>
      <p>I enjoy making responsive websites and apps that clients love. I have 5 years of experience in the software development life cycle</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
