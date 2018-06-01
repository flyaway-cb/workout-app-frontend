import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import SignUpForm from './pages/SignUpForm'
import LoginForm from './pages/LoginForm'

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/sign_up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
