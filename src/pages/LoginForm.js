import React, {Component} from 'react'
import {Textfield, Button} from 'react-mdl'

class LoginForm extends Component{
  render(){
    return(
      <div>
        <Textfield
            label="First Name"
            floatingLabel
            style={{width: '200px'}}
        />
        <Textfield
            label="Last Name"
            floatingLabel
            style={{width: '200px'}}
        />
        <Textfield
            label="Email"
            floatingLabel
            style={{width: '200px'}}
        />
        <Textfield
            label="Password"
            floatingLabel
            style={{width: '200px'}}
        />
        <Textfield
            label="Confirm Password"
            floatingLabel
            style={{width: '200px'}}
        />
        <Button raised accent ripple>Button</Button>
      </div>
    )
  }
}
export default LoginForm
