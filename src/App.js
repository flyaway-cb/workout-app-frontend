import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import SignUpForm from './pages/SignUpForm'
import LoginForm from './pages/LoginForm'
import AuthService from './components/AuthService'
import Dashboard from './pages/Dashboard'

const Auth = new AuthService()

class App extends Component {
  handleLogout(){ // <- Remove local storage, and redirect the user
    Auth.logout()
    this.props.history.replace('/login');
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/sign_up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/dashboard" render={ (props) => <Dashboard logout={this.handleLogout.bind(this)}/>} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
