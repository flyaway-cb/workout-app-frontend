import React, {Component} from 'react'
import {TextField, Button, Card, CardContent} from '@material-ui/core'
import {registerUser} from "../api"

class SignUpForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      registerSuccess: false
    }
  }
  handleChange(event){
    let { form } = this.state
    form[event.target.id] = event.target.value
    this.setState({form})
  }
  handleSubmit(event){
    let { form } = this.state
    registerUser(form).then(
      this.setState({registerSuccess: true})
    )
    console.log(this.state.registerSuccess)
  }
  render(){
    let form = this.state.form
    return(
      <div id="sign-up-page">
        <Card className="form-card">
          <CardContent variant="headline" component="h2">Sign up for Fitology!</CardContent>
          <CardContent id="sign-up-form">
            <span className="text-field">
            <TextField
                label="First Name"
                style={{width: '200px'}}
                id="first_name"
                value={form.first_name}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                label="Last Name"
                style={{width: '200px'}}
                id="last_name"
                value={form.last_name}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                label="Email"
                style={{width: '200px'}}
                id="email"
                value={form.email}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                type="password"
                label="Create Password"
                style={{width: '200px'}}
                id="password"
                value={form.password}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          <span className="text-field">
            <TextField
                type="password"
                label="Confirm Password"
                style={{width: '200px'}}
                id="password_confirmation"
                value={this.state.form.password_confirmation}
                onChange={this.handleChange.bind(this)}
            />
          </span>
        </CardContent>
        <span className="action-button">
          <Button variant="raised" color="primary" onClick={this.handleSubmit.bind(this)}>Sign Up</Button>
        </span>
        </Card>



      </div>
    )
  }
}
export default SignUpForm
