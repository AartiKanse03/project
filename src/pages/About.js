import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* First Section: Image Left, Text Right */}
      <div className="section image-left">
        <div className="image">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/a51588183481703.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpeg" />
        </div>
        <div className="text">
          <h2>Our Vision</h2>
          <p>
          our vision is to redefine the event management experience by combining innovation, creativity, and meticulous attention to detail. We aim to be the premier choice for clients seeking exceptional and personalized events, from intimate gatherings to grand celebrations. Our commitment to excellence, community impact, and sustainable practices drives us to create memorable moments that leave a lasting impression. We strive to empower our team, foster professional growth, and continuously set new standards in the industry.
          </p>
        </div>
      </div>

      {/* New Section: Get to Know More */}
      <div className="info-box">
        <h2>Get to Know More About Us</h2>
        <p>
          We are dedicated to excellence in everything we do. Our team works hard to ensure that 
          every aspect of our service meets the highest standards. Learn more about our mission, 
          vision, and the values that drive us to be the best in the industry.
        </p>
      </div>
    </div>
  );
}

export default About;
