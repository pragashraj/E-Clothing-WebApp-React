import React from 'react';


const CartItem = ({ item: {price, name, quantity } }) => (
  <div className='cart-item'>
   <div className="cart-image"></div> 
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;