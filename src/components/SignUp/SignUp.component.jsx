import React, { Component } from 'react';
import "./SignUp.styles.scss"
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      return console.log("Passwords do not match")
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })
      
    } catch (error) {
      console.log(error)
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    }
    this.setState({email: "", password: ""})
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            name="displayName"
            type="text"
            label="Display Name"
            value={this.state.displayName}
            handleChange={(event)=>this.handleChange(event)}
            required
          />
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
          <FormInput 
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            handleChange={(event)=>this.handleChange(event)}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
