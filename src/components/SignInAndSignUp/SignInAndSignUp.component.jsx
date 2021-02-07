import React from 'react';
import "./SignInAndSignUp.styles.scss";
import SignIn from '../SignIn/SignIn.component';
import SignUp from '../SignUp/SignUp.component';

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
}

export default SignInAndSignUp;
