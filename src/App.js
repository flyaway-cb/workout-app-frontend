import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="back">
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
