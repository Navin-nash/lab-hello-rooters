// In src/components/LandingPage.jsx
import React from 'react';
import '../landingPage.css';

// Import your images
import declarativeIcon from '../assets/declarativeIcon.png';
import componentsIcon from '../assets/componentsIcon.png';
import singleWayIcon from '../assets/singleWayIcon.png';
import jsxIcon from '../assets/jsxIcon.png';

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-wrapper">
      <img src={icon} alt={`${title} icon`} className="feature-icon" />
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const LandingPage = () => {
  const features = [
    {
      icon: declarativeIcon,
      title: "Declarative",
      description: "React makes it painless to create interactive UIs."
    },
    {
      icon: componentsIcon,
      title: "Components",
      description: "Build encapsulated components that manage their state."
    },
    {
      icon: singleWayIcon,
      title: "Single-Way",
      description: "A set of immutable values are passed to the component's."
    },
    {
      icon: jsxIcon,
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers."
    }
  ];

  return (
    <div className="landing-container">
      <div className="background-logo">
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="react-logo">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      </div>
      <div className="content-wrapper">
        <div className="hero-section">
          <h1 className="hero-title">Say hello to ReactJS</h1>
          <p className="hero-subtitle">
            You will learn a Frontend framework from scratch, to become a Ninja Developer.
          </p>
          <button className="awesome-button">Awesome!</button>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;