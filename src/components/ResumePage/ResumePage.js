import React, { Component } from 'react';
import './ResumePage.css';
import Title from '../Title/Title';
import Pdf from './CV_MiaLahtinen_2020.pdf';
import { ExternalButton } from '../IconButton/IconButton.js';
import LinkedInIcon from "./../../icons/linkedin.png"
import GithubIcon from "./../../icons/github.png"
import ResumeIcon from "./../../icons/clip.png"

const list = [
  {
    url: 'https://www.linkedin.com/in/mia-lahtinen',
    name: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    url: 'https://github.com/miavii',
    name: 'GitHub',
    icon: GithubIcon,
  },
  {
    url: Pdf,
    name: 'CV PDF',
    icon: ResumeIcon,
  }
];
class ResumePage extends Component {
  render () {
    const buttonList = list.map( (item) => <ExternalButton key={item.name} text={item.name} icon={item.icon} url={item.url} />);
    return (
      <div id="resume" className = "resumeContainer">
        <Title class="semi title" text="Where to find me"/>
        <div className="buttonGroup">
          {buttonList}
        </div>
      </div>
    );
  }
}

export default ResumePage;
