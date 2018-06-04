import React, { Component } from 'react';
import './App.css';
import UserHistory from './pages/user_history'
import NativeSelects from './pages/testselects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <div className="App">
        <Router>
        <Switch>
          <Route exact path ="/test" render={(props) => <NativeSelects history={this.state.history}/>} />
          <Route exact path ="/stats" render={(props) => <UserHistory history={this.state.history}/>} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
