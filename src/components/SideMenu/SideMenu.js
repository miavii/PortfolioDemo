import React from 'react';
import HomeIcon from "./../../icons/home.png"
import GalleryIcon from "./../../icons/code.png"
import ResumeIcon from "./../../icons/clip.png"
import AboutIcon from "./../../icons/about.png"
import './SideMenu.css';

function SideMenu() {
  return (
    <div className="SideMenu">
      <a className="home" href="#">
        <img className="icon" src={HomeIcon}/>
        <span className="text">home</span></a>
      <a className="gallery" href="#">
        <img className="icon" src={GalleryIcon}/>
        <span className="text">gallery</span></a>
      <a className="resume" href="#">
        <img className="icon" src={ResumeIcon}/>
        <span className="text">resume</span></a>
      <a className="about" href="#">
        <img className="icon" src={AboutIcon}/>
        <span className="text">about</span></a>
    </div>
  );
}

export default SideMenu;
