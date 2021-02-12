import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import "./CartDropdown.styles.scss";
import {connect} from "react-redux"
import CartItem from '../Cart-Item/Cart-Item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          )) :
          <span className="empty-message">You don't have any item in your cart</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout")
        dispatch(toggleCartHidden())
      }}>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
