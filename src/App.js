import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import NavBar from './components/navbar';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="back">
        <NavBar/>
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
