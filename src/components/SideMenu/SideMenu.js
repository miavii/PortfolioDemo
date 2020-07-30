import React, { Component } from 'react';
import HomeIcon from "./../../icons/home.png"
import GalleryIcon from "./../../icons/code.png"
import ResumeIcon from "./../../icons/clip.png"
import AboutIcon from "./../../icons/about.png"
import NavItem from '../MenuItem/MenuItem';
import './SideMenu.css';

const menu = [
  {
    id: 'home',
    name: 'home',
    icon: HomeIcon,
  },
  {
    id: 'gallery',
    name: 'gallery',
    icon: GalleryIcon,
  },
  {
    id: 'resume',
    name: 'resume',
    icon: ResumeIcon,
  },
  {
    id: 'about',
    name: 'about',
    icon: AboutIcon,
  },
];

class SideMenu extends Component {
  render() {
    const NavList = menu.map((item) => <NavItem text={item.name} icon={item.icon}/>);
    return (
      <div className="SideMenu">
        {NavList}
      </div>
    );
  }
}

export default SideMenu;
