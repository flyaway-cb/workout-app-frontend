import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import SignUpForm from './pages/SignUpForm'
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'
import LogTable from './pages/LogTable'
// import UserHistory from './pages/UserHistory'



class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
          <Switch>
            <Route exact path="/sign_up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/log" component={LogTable} />
            {/* <Route exact path="/user-history" component={UserHistory} /> */}
          </Switch>

      </div>
    );
  }
}

export default withRouter(App);
