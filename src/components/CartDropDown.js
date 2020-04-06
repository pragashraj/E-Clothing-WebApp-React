import React from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'

const CartDropDown=({cartItems})=>{
    return(
        <div className="cart-dropDown">
            <div className="cart-items">
                    {cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))}
            </div>
            <div className="cart-div"><button className="cart-btn">Go To CheckOut</button></div>
        </div>
    )
}


const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
  });

export default connect(mapStateToProps)(CartDropDown)