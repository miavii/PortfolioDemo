import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Initial Edit boop
        </p>
      </header>
      <SideMenu/>
    </div>
  );
}

export default App;
