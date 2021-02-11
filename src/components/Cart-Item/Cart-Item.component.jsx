import React from 'react';
import "./Cart-Item.styles.scss";

const CartItem = ({item: { imageUrl, name, quantity, price} }) => {
  console.log("CART ITEM",{ imageUrl, name, quantity, price } )
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${quantity} X ${price}</span>
      </div>
    </div>
  );
}

export default CartItem;
