import React from 'react';

const IconButton = props => (
        <button className={props.text} onClick={() => {this.scroll(props.myRef)}}>
          <img className="icon" src={props.icon} alt={props.text}/>
          <span className="text">{props.text}</span>
        </button>
)

const ExternalButton = props => (
        <a className={props.text} href={props.url} target="_blank" rel="noopener noreferrer">
          <img className="icon" src={props.icon} alt={props.text} />
          <span className="text">{props.text}</span>
        </a>
)

export {IconButton, ExternalButton};
