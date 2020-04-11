import React from 'react'
import './checkoutStyle.css' 
import women from '../images/women.jpg'
import {removeCartItem} from './Redux/cartAction'
import {connect} from 'react-redux'

const CheckoutItem=({cartItem ,removeItem})=>{
    const {name,price,quantity}=cartItem
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={women} alt="cartItem"/>
            </div>
            <span className="field">{name}</span>
            <span className="field">{quantity}</span>
            <span className="field">{price}</span>
            <div className="remove-btn" onClick={()=>removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        removeItem:item=>dispatch(removeCartItem(item))
    }
}
export default connect(null,mapDispatchToProps)(CheckoutItem)