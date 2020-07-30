import React, { Component } from 'react';
import HomeIcon from "./../../icons/home.png"
import GalleryIcon from "./../../icons/code.png"
import ResumeIcon from "./../../icons/clip.png"
import AboutIcon from "./../../icons/about.png"
import {IconButton} from '../IconButton/IconButton';
import './SideMenu.css';

const menu = [
  {
    url: '#home',
    name: 'home',
    icon: HomeIcon,
  },
  {
    url: '#gallery',
    name: 'gallery',
    icon: GalleryIcon,
  },
  {
    url: '#resume',
    name: 'resume',
    icon: ResumeIcon,
  },
  {
    url: '#about',
    name: 'about',
    icon: AboutIcon,
  },
];

class SideMenu extends Component {
  render() {
    const NavList = menu.map((item) => <IconButton text={item.name} icon={item.icon} url={item.url} />);
    return (
      <div className="SideMenu">
        {NavList}
      </div>
    );
  }
}

export default SideMenu;
