import React, { Component }from 'react';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import ResumePage from './components/ResumePage/ResumePage';
import TitleContainer from './components/TitleContainer/TitleContainer';
import AboutPage from './components/AboutPage/AboutPage';
import HomeIcon from "./icons/home.png"
import GalleryIcon from "./icons/code.png"
import ResumeIcon from "./icons/clip.png"
import AboutIcon from "./icons/about.png"

const menu = [
  {
    id: 0,
    name: 'home',
    icon: HomeIcon,
    ref: React.createRef()
  },
  {
    id: 1,
    name: 'gallery',
    icon: GalleryIcon,
    ref: React.createRef()
  },
  {
    id: 2,
    name: 'resume',
    icon: ResumeIcon,
    ref: React.createRef()
  },
  {
    id: 3,
    name: 'about',
    icon: AboutIcon,
    ref: React.createRef()
  },
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: ""
    }

  };

  componentDidMount() {
      // fetch an image from NASA's APOD api
      fetch(`https://api.nasa.gov/planetary/apod?api_key=KS2QrTygGu6iYEU1jpuhFRjZdNPr3suWi7uiiNCD`)
        .then(response => response.json())
        .then(json => {
          // if nasa returns a video, we'll fetch a result from the same day last year
          let isImage = json.media_type === "image";
          if (!isImage){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear() - 1;
            const date = yyyy + "-" + mm + "-" + dd;
            console.log(yyyy + "-" + mm + "-" + dd);

            return fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=KS2QrTygGu6iYEU1jpuhFRjZdNPr3suWi7uiiNCD`).then(response => response.json());}})
        .then(json => this.setState({ photo: json }));
    }

  render() {
    return (
      <div className="App">
        <SideMenu nav={menu}/>
        <div ref={menu[0].ref}>
          <TitleContainer/>
          <BackgroundImage photo={this.state.photo} />
        </div>
        <div ref={menu[2].ref}>
          <ResumePage />
        </div>
        <div ref={menu[3].ref} className="container">
          <AboutPage />
          <BackgroundImage photo={this.state.photo} />
        </div>
      </div>
    );
  }
}

export default App;
