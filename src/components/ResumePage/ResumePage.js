import React, { Component } from 'react';
import './ResumePage.css';
import Pdf from './CV_MiaLahtinen_2020.pdf';

class ResumePage extends Component {
  render () {
    return (
      <div className = "resumeContainer">
        <a href = {Pdf} target = "_blank">Download Pdf</a>
      </div>
    );
  }
}

export default ResumePage;
