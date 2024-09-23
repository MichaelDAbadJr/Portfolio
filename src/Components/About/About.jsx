import React, { useEffect, useRef } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import aboutImg from '../../assets/about_img.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const techStackRef = useRef(null);

  // First useEffect for sectionRef
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.05 }
    ); // You can adjust the threshold value

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

    // Second useEffect for techStackRef
    useEffect(() => {
      const techStackSections = techStackRef.current?.querySelectorAll('.tech-stack-section');
  
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('show');
              }, index * 300); // Increased delay for the shuffle effect
            } else {
              entry.target.classList.remove('show');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (techStackSections) {
        techStackSections.forEach(section => observer.observe(section));
      }
  
      return () => {
        if (techStackSections) {
          techStackSections.forEach(section => observer.unobserve(section));
        }
      };
    }, []);

  return (
    <div id="about" className="about fade-in" ref={sectionRef}>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={aboutImg}
            id="jun-about"
            alt="Profile picture"
            loading="lazy"
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              My expertise extends from crafting intuitive user interfaces with
              React.js to developing scalable backend API solutions using
              Node.js, Express.js, JWT tokens, bcrypt, and database management.
              My skillset involves leveraging cloud technologies such as Google
              Cloud Services to enhance functionality and scalability.
            </p>
            <p>
              I love seeing my projects come to life. My enthusiasm extends to
              DevOps, where I enjoy the challenges of deployment and continuous
              integration. I take pride in having the ability to learn emerging
              frameworks, technologies and stacks at a high degree of
              efficiency. I thrive on solving complex problems and am always
              eager to contribute to impactful projects that drive success and
              growth.
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
      <div className="about-tech-stacks-container" ref={techStackRef}>
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
