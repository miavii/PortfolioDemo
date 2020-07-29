import React, { Component }from 'react';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import LandingImage from "./components/LandingImage/LandingImage";

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
        <LandingImage photo={this.state.photo} />
        <SideMenu/>
      </div>
    );
  }
}

export default App;
