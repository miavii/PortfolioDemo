import React from "react";
import './LandingImage.css';

const LandingImage = props => (
  <div id="home" className="hero" style={{ backgroundImage:`url(${props.photo.hdurl})` }}>
    <div className="colorlayer">
    </div>
    <div className="credits"><span>{props.photo.title}</span> by {props.photo.copyright}</div>
  </div>
);

export default LandingImage;
