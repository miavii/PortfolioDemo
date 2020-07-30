import React from 'react';

const NavItem = props => (
        <a className={props.text} href={"#" + props.text}>
          <img className="icon" src={props.icon}/>
          <span className="text">{props.text}</span>
        </a>
    )

export default NavItem;
