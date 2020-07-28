import React from "react";
import './LandingImage.css';

const LandingImage = props => (
  <div className="background-image" style={{ backgroundImage:`url(${props.photo.hdurl})` }}>
    <div className="title-container">
      <span className="name">Mia Lahtinen</span>
      <span className="title">Web Developer</span>
      </div>
    <div className="credits"><span>{props.photo.title}</span> by {props.photo.copyright}</div>
  </div>
);

export default LandingImage;