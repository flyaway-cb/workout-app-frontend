import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Login from './login';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Main;
