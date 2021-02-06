import React from 'react';
import "./CustomButton.styles.scss"

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
  return (
    <button className={`${isGoogleSignIn && "isGoogleSignIn"} custom-button `} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;