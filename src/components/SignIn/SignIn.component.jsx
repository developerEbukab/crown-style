import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.component';

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({email: "", password: ""})
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={(event)=>this.handleChange(event)}
            required
          />
          <FormInput 
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={(event)=>this.handleChange(event)}
            required
          />

          <input type="submit" value="Submit form"/>
        </form>
      </div>
    );
  }
}

export default SignIn;
