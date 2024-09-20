import React, { useEffect, useRef } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
const Services = () => {
  const sectionRef = useRef(null);

  // UseEffect to trigger the slide-in animation when section is in view
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' when in view
          } else {
            entry.target.classList.remove('visible'); // Remove when out of view
          }
        });
      },
      { threshold: 0.05 }
    ); // Adjust threshold as needed

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
    <div id="services" className="services slide-in-right" ref={sectionRef}>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={service.s_no} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
