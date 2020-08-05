import React, { Component } from 'react';
import {IconButton} from '../IconButton/IconButton';
import './SideMenu.css';


class SideMenu extends Component {
  handleOnClick = (reference, event) => {
          //.current is verification that your element has rendered
          console.log("scrolling to ", reference);
          if(reference.current){
              reference.current.scrollIntoView({
                 behavior: "smooth",
                 top: reference.current.offsetTop
              })
          }
  }
  render() {
    const nav = this.props.nav;
    const NavList = nav.map((item) => (
      <IconButton
       key={item.id}
       text={item.name}
       icon={item.icon}
       onClick={() => this.handleOnClick(item.ref)}
       />));
    return (
      <div className="SideMenu">
        {NavList}
      </div>
    );
  }
}

export default SideMenu;
