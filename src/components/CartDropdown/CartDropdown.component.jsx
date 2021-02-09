import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
