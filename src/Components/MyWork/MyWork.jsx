import React, { useEffect, useRef } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const sectionRef = useRef(null);

  const handleButtonClick = url => {
    if (url) {
      window.open(url, '_blank');
    }
  };


   // UseEffect to trigger the slide-in animation when section is in view
  useEffect(() => {
    const section = sectionRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' when in view
        } else {
          entry.target.classList.remove('visible'); // Remove when out of view
        }
      });
    }, { threshold: 0.05 }); // Adjust threshold as needed

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="work" className="mywork slide-in-left" ref={sectionRef}>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map(work => {
          return (
            <div key={work.w_no} className="image-wrapper">
              <img key={work.w_no} src={work.w_img} alt={`Work ${work.w_no}`} />
              <div className="overlay">
                {work.frontend_repo && (
                  <button
                    className="overlay-button"
                    onClick={() => handleButtonClick(work.frontend_repo)}
                  >
                    Frontend Repo
                  </button>
                )}
                {work.backend_repo &&
                <button
                  className="overlay-button"
                  onClick={() => handleButtonClick(work.backend_repo)}
                >
                  Backend Repo
                </button>
                }
                {work.netlify_url &&
                <button
                  className="overlay-button netlify-button"
                  onClick={() => handleButtonClick(work.netlify_url)}
                >
                  View Live Page on Netlify
                </button>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
