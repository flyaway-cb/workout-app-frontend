import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Login from './login';
import Workouts from './groupworkouts';
import Register from './register';
import About from './aboutus';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={Login} />
    <Route path="/groupworkouts" component={Workouts} />
    <Route path="/register" component={Register} />
    <Route path="/aboutus" component={About} />
  </Switch>
)

export default Main;
