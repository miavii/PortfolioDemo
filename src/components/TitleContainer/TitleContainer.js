import React from 'react';
import './TitleContainer.css';
import Title from '../Title/Title';

const TitleContainer = props => (
  <div className="title-container">
    <Title class="bold main" text="Mia Lahtinen" />
    <Title text="Web Developer" />
  </div>
) ;

export default TitleContainer;
