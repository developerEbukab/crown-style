import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import "./CartDropdown.styles.scss";
import {connect} from "react-redux"
import CartItem from '../Cart-Item/Cart-Item.component';

const CartDropdown = ({ cartItems }) => {
  console.log("CART ITEMS", cartItems[0])
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = ({cart: {cartItems} }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);
