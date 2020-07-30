import React, { Component } from 'react';
import './ResumePage.css';
import Title from '../Title/Title';
import Pdf from './CV_MiaLahtinen_2020.pdf';
import LinkedInIcon from "./../../icons/linkedin.png"
import GithubIcon from "./../../icons/github.png"
import ResumeIcon from "./../../icons/clip.png"

class ResumePage extends Component {
  render () {
    return (
      <div id="resume" className = "resumeContainer">
        <Title text="Where to find me"/>
        <a href = "#" target = "_blank"><img className="icon" src={LinkedInIcon}/></a>
        <a href ="#"  target = "_blank"><img className="icon" src={GithubIcon}/></a>
        <a href = {Pdf} target = "_blank"><img className="icon" src={ResumeIcon}/></a>
      </div>
    );
  }
}

export default ResumePage;
