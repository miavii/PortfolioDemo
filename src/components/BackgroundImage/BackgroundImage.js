import React from "react";
import './BackgroundImage.css';

const LandingImage = props => (
  <div className="hero" style={{ backgroundImage:`url(${props.photo.hdurl})` }}>
    <div className="topGradient"></div>
    <div className="bottomGradient"></div>
    <div className="credits"><span>{props.photo.title}</span> by {props.photo.copyright}</div>
  </div>
);

export default LandingImage;
