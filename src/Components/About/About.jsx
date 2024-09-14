import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profilePic from '../../images/profile-pic.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profilePic} id="jun-about" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer and Backend Developer with
              over a 3 years of experience in the field. Throughout my career, I
              have had the privilege of collaborating with outstanding
              developers, contributing to their success and growth.
            </p>
            <p>
              My passion for Full Stack Development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '65%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>Node Express</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: '35%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-tech-stacks-container">
        <div className="about-tech-stacks">

          <div className="tech-stack-section">
            <h2>Frontend Stack</h2>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>SAAS</li>
            </ul>
          </div>

          <div className="tech-stack-section">
            <h2>Backend Stack</h2>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Python Django</li>
              <li>Java</li>
              <li>Google Cloud</li>
              <li>Postman</li>
              <li>JWT Tokens</li>
              <li>bcrypt</li>
            </ul>
          </div>

          <div className="tech-stack-section">
            <h2>DevOps Stack</h2>
            <ul>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Git/Github</li>
              <li>CI/CD</li>
              <li>Google App Engine</li>
            </ul>
          </div>

        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1></h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div> */}
    </div>
  );
};

export default About;
