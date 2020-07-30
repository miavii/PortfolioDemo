import React, { Component }from 'react';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import ResumePage from './components/ResumePage/ResumePage';
import TitleContainer from './components/TitleContainer/TitleContainer';
import AboutPage from './components/AboutPage/AboutPage';

class App extends Component {
  constructor(props) {
    super(props)
    // Create the ref
    this.home = React.createRef();
    this.about = React.createRef();
    this.gallery = React.createRef();
    this.resume = React.createRef();
    this.state = {
      photo: ""
    }
  }
  ;

  componentDidMount() {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=KS2QrTygGu6iYEU1jpuhFRjZdNPr3suWi7uiiNCD`)
        .then(response => response.json())
        .then(json => this.setState({ photo: json }));
    }

  render() {
    return (
      <div className="App">
        <SideMenu />
        <div id="home" ref={this.home}>
          <TitleContainer/>
          <BackgroundImage photo={this.state.photo} />
        </div>
        <div ref={this.resume}>
          <ResumePage />
        </div>
        <div id="about" ref={this.about} className="container">
          <AboutPage />
          <BackgroundImage photo={this.state.photo} />
        </div>
      </div>
    );
  }
}

export default App;
