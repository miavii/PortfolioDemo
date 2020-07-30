import React from 'react';

const IconButton = props => (
        <a className={props.text} href={props.url}>
          <img className="icon" src={props.icon}/>
          <span className="text">{props.text}</span>
        </a>
)

const ExternalButton = props => (
        <a className={props.text} href={props.url} target="_blank">
          <img className="icon" src={props.icon}/>
          <span className="text">{props.text}</span>
        </a>
)

export {IconButton, ExternalButton};
