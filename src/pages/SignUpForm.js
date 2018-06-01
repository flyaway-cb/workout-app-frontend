import React, {Component} from 'react'
import {Textfield, Button, Card, CardTitle, CardText, CardActions} from 'react-mdl'

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
      }
    }
  }
  handleChange(event){
    let { form } = this.state
    form[event.target.id] = event.target.value
    this.setState({form})
  }
  handleSubmit(){
    console.log(this.state.form)
  }
  render(){
    let form = this.state.form
    return(
      <div id="sign-up-page">
        <Card shadow={0} style={{margin: 'auto'}}>
          <CardTitle expand>Sign up for Fitology!</CardTitle>
          <CardText id="sign-up-form">
            <span>
            <Textfield className="text-field"
                label="First Name"
                floatingLabel
                style={{width: '200px'}}
                id="first_name"
                value={form.first_name}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span>
            <Textfield className="text-field"
                label="Last Name"
                floatingLabel
                style={{width: '200px'}}
                id="last_name"
                value={form.last_name}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span>
            <Textfield className="text-field"
                label="Email"
                floatingLabel
                style={{width: '200px'}}
                id="email"
                value={form.email}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span>
            <Textfield className="text-field"
                type="password"
                label="Create Password"
                floatingLabel
                style={{width: '200px'}}
                id="password"
                value={form.password}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          <span>
            <Textfield className="text-field"
                type="password"
                label="Confirm Password"
                floatingLabel
                style={{width: '200px'}}
                id="password_confirmation"
                value={this.state.form.password_confirmation}
                onChange={this.handleChange.bind(this)}
            />
          </span>
          </CardText>
          <CardActions id="sign-up-button" >
              <Button raised colored ripple onClick={this.handleSubmit.bind(this)}>Sign Up</Button>
          </CardActions>
        </Card>



      </div>
    )
  }
}
export default SignUpForm
