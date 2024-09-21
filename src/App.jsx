import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import TermsOfService from './Components/Footer/TermsOfService';
import PrivacyPolicy from './Components/Footer/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </Router>
  );
};

// Layout component for the home page
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
