import React, { useEffect, useRef } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.05 }); // Adjust the threshold as needed

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const onSubmit = async event => {
    event.preventDefault();
    // setResult('Sending....');
    try {
    const formData = new FormData(event.target);

    formData.append('access_key', 'e6086223-8846-4cf7-b8a8-5d68f8ff0db6');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
    //   setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      // Handle API- level error
      console.log('Error', data);
    //   setResult(data.message);
    }
  } catch (error) {
    // Handle network error or other unexpected errors
    console.error('There was an error with the submission:', error);
  }

  return (
    <div>
      <div id="contact" className="contact slide-in-right" ref={sectionRef}>
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently available to take on new projects, so feel free to
              send me a message about anything. You
              can contact anytime and I will get back to you soon.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>developer@junmike.dev</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>(210)-968-4618</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>TX, United States</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message "
              id=""
              rows="8"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
