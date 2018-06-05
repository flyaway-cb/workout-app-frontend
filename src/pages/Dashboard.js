import React, {Component} from 'react'
import withAuth from '../components/withAuth'
import AuthService from '../components/AuthService'  // <- We use the AuthService to logout

const Auth = new AuthService()

class Dashboard extends Component{
  handleLogout(){ // <- Remove local storage, and redirect the user
      Auth.logout()
      this.props.history.push('/login');
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
          </p>
        </div>
      )
    }
  }

export default withAuth(Dashboard)
