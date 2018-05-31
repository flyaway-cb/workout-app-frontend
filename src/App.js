import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginForm from './pages/LoginForm'

class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default App;
