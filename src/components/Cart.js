import React from 'react'
import cart from '../images/cart2.png';

const CartIcon=()=>{
    return(
        <div className="Cart-icon">
            <img src={cart} alt='cart' className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon