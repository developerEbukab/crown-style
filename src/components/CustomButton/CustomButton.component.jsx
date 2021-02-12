import React from 'react';
import "./CustomButton.styles.scss"

const CustomButton = ({children, isGoogleSignIn, onClick, inverted, ...otherProps}) => {
  return (
    <button onClick={onClick}  className={`${inverted && "inverted"} ${isGoogleSignIn && "isGoogleSignIn"} custom-button `} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
