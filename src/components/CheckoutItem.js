import React from 'react'
import './checkoutStyle.css' 
import women from '../images/women.jpg'
import {removeCartItem,addItem,removeSingleItem} from './Redux/cartAction'
import {connect} from 'react-redux'

const CheckoutItem=({cartItem ,removeItem,addItem,removeSingleItem})=>{
    const {name,price,quantity}=cartItem
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={women} alt="cartItem"/>
            </div>
            <span className="field">{name}</span>

            <span className="quantity">
                <div className="arrow" onClick={()=>removeSingleItem(cartItem)}>&#10094;</div>
                    {quantity}
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>

            <span className="field">{price}</span>
            <div className="remove-btn" onClick={()=>removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        removeItem:item=>dispatch(removeCartItem(item)),
        addItem:item=>dispatch(addItem(item)),
        removeSingleItem:item=>dispatch(removeSingleItem(item))
    }
}
export default connect(null,mapDispatchToProps)(CheckoutItem)