import React, { Component } from 'react';

import { withRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import SignUpForm from './pages/SignUpForm'
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'
// import UserHistory from './pages/UserHistory'
import UserHistory from './pages/user_history'
import CreateMovement from './pages/create_movement'
import CreateWorkout from './pages/create_workout'
import LogWorkout from './pages/log_workout'
import WorkoutPage from './pages/workout_page'

const BASE = 'http://localhost:3000'


class App extends Component {
constructor(props) {
  super(props)
  this.state={
  }

}

// componentWillMount() {
//   return fetch(BASE + '/user_histories')
//     .then((resp) => {
//       return resp.json()
//     })
//     .then(APIinfo => {
//       this.setState({
//         history: APIinfo
//         })
//       console.log(this.state.history);
//     })
// }


  render() {
    return (

      <div>
        <CssBaseline />
          <Switch>
            <Route exact path="/sign_up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/log" component={LogTable} />
       <Route exact path ="/moves" render={(props) => <CreateMovement history={this.state.history}/>} />
          <Route exact path ="/newworkout" render={(props) => <CreateWorkout history={this.state.history}/>} />
          <Route exact path ="/stats" render={(props) => <UserHistory history={this.state.history}/>} />
          <Route exact path ="/log" render={(props) => <LogWorkout history={this.state.history}/>} />
          <Route exact path ="/new" render={(props) => <WorkoutPage history={this.state.history}/>} />
            {/* <Route exact path="/user-history" component={UserHistory} /> */}
          </Switch>


      </div>
    );
  }
}

export default withRouter(App);
