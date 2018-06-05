import React, { Component } from 'react';
import './App.css';
import Main from './pages/main';
import NavBar from './components/navbar';

import { withRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

const BASE = 'http://localhost:3000'


class App extends Component {
constructor(props) {
  super(props)
  this.state={
  }

}

  render() {
    return (

      <div className="back">
        <CssBaseline />
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

export default withRouter(App);
