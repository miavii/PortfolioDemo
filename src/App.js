import React, { Component }from 'react';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import ResumePage from './components/ResumePage/ResumePage';
import TitleContainer from './components/TitleContainer/TitleContainer';

class App extends Component {
  state = {
    photo: ""

  };

  componentDidMount() {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=KS2QrTygGu6iYEU1jpuhFRjZdNPr3suWi7uiiNCD`)
        .then(response => response.json())
        .then(json => this.setState({ photo: json }));
    }

  render() {
    return (
      <div className="App">
        <SideMenu />
        <TitleContainer/>
        <BackgroundImage photo={this.state.photo} />
        <ResumePage />
        <BackgroundImage photo={this.state.photo} />
      </div>
    );
  }
}

export default App;
