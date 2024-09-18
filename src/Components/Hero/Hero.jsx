import React from 'react';
import './Hero.css';
import profilePic from '../../images/profile-pic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import banner from '../../assets/junmike.dev-banner2.jpeg';
import resumePDF from '../../assets/Michael Delacruz Abad Jr_Software Developer.pdf';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profilePic} id="profile-pic" alt="profile-pic" />
      {/* <img src={banner} id="banner" alt="banner" /> */}

      <h1>
        <span>Welcome! I'm Jun Michael,</span>
      </h1>
      <p>
        A dedicated Full Stack Software Engineer with a passion for both
        front-end and back-end development. I love building dynamic, responsive
        websites with React JS and crafting robust APIs. I bring a holistic
        approach to software development. Here&rsquo;s a glimpse into my skill
        set and experience:
      </p>
      <p>
        Check out my live applications below, deployed on <span>Netlify</span>,
        and explore the accompanying repositories. Click the links to see my
        work in action!
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className='hero-resume'>
          <a
            className="resume-link"
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            // download="Jun_Michael_Resume.pdf"
          >
            My resume
          </a>
          </div>
      </div>
    </div>
  );
};

export default Hero;
