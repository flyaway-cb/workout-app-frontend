import React, {Component} from 'react'
import {TextField, Button, Card, CardContent} from '@material-ui/core'
import {registerUser} from "../api"

class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        email: "",
        password: "",
      },
      loginSuccess: false
    }
  }
  handleChange(event){
    let { form } = this.state
    form[event.target.id] = event.target.value
    this.setState({form})
  }
  handleSubmit(event){
    let {form} = this.state
    registerUser(form).then(
      this.setState({loginSuccess: true})
    )
    console.log(this.state.registerSuccess)
  }
  render(){
    let form = this.state.form
    return(
      <div className="sign-up-page">
        <Card className="form-card">
          <CardContent variant="headline" component="h2">Log in</CardContent>
          <CardContent id="log-in-form">
          <span className="text-field">
            <TextField
                label="Email"
                style={{width: '200px'}}
                id="email"
                value={form.email}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span className="text-field">
            <TextField
                type="password"
                label="Password"
                style={{width: '200px'}}
                id="password"
                value={form.password}
                onChange={this.handleChange.bind(this)}
            />
          </span><br />
          </CardContent>
          <span className="action-button">
            <Button variant="raised" color="primary" onClick={this.handleSubmit.bind(this)}>Log in</Button>
          </span>
        </Card>



      </div>
    )
  }
}
export default LoginForm
