import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import SignUpForm from './pages/SignUpForm'

class App extends Component {
  render() {
    return (
      <div>
        <SignUpForm />
      </div>
    );
  }
}

export default App;
