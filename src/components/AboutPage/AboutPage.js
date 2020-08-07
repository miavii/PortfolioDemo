import React, { Component } from 'react';
import './AboutPage.css';
import Title from '../Title/Title';

class AboutPage extends Component {
  render () {
    return (
    <div className="aboutContainer">
      <Title class="semi title" text="A Little About Me"/>
      <div>
        <p>I am a Software Developer</p>
        <p>This site is meant to serve as my portfolio and contain projects and
        work I am most proud of. It is currently still in the works and a gallery
        will be added soon.</p>
      </div>
    </div>);
  }
}
export default AboutPage;
