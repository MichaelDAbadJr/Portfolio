import { useEffect, useRef } from 'react';
import './Hero.css';
import profilePic from '../../assets/hero_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resumePDF from '../../assets/Michael Delacruz Abad Jr_Software Developer.pdf';
import githubSVG from '../../assets/github-mark.svg';
import linkedInSVG from '../../assets/linkedin.svg';
const Hero = () => {
  
  const heroActionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add staggered show effect
          elementsRef.current.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('show');
            }, index * 300); // Delay each element's appearance by 300ms
          });
        } else {
          // Remove 'show' class when scrolling up or out of view
          elementsRef.current.forEach(el => {
            el.classList.remove('show');
          });
        }
      });
    }, options);

    if (heroActionRef.current) {
      observer.observe(heroActionRef.current);
    }

    return () => {
      if (heroActionRef.current) {
        observer.unobserve(heroActionRef.current);
      }
    };
  }, []);

  return (
    <div id="home" className="hero">
      <img src={profilePic} id="profile-pic" alt="profile-pic"  onLoad={(e) => e.target.style.opacity = '1'}/>
      <h1>
        <span>Welcome! I'm Jun Michael,</span>
      </h1>
      <p>
        A passionate Full Stack Software Engineer with a strong track record of
        building dynamic responsive websites and crafting robust back-end APIs.
        My expertise spans both front-end and back-end technologies, and I take
        a comprehensive approach to software development. Here&rsquo;s a glimpse
        into my skill set and experience:
      </p>

      <p>
        Check out my live applications below, deployed on <span>Netlify</span>,
        and explore the accompanying repositories. Click the links to see my
        work in action!
      </p>
      <div className="hero-action" ref={heroActionRef}>
        <div
          className="hero-connect"
          ref={element => (elementsRef.current[0] = element)}
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Let's Connect
          </AnchorLink>
        </div>
        {/* <div
          className="hero-resume"
          ref={element => (elementsRef.current[1] = element)}
        >
          <a
            className="resume-link"
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            // download="Jun_Michael_Resume.pdf"
          >
            My Resume
          </a>
        </div> */}
        <div ref={element => (elementsRef.current[2] = element)}>
          <a
            href="https://github.com/MichaelDAbadJr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubSVG}
              alt="GitHub Logo"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
        </div>
        {/* <div ref={element => (elementsRef.current[3] = element)}>
          <a
            href="https://www.linkedin.com/in/michael-jun-abad-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedInSVG}
              alt="GitHub Logo"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
