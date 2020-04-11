import React from 'react'
import './checkoutStyle.css' 
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectCartItems,selectCartItemTotal} from './Redux/cart.selectors'
import CheckoutItem from './CheckoutItem'

const CheckoutPage=({cartItems,total})=>{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
               
                <div className="checkout-block">
                    <span>Product</span>
                </div>

                <div className="checkout-block">
                    <span>Description</span>
                </div>

                <div className="checkout-block">
                    <span>Quantity</span>
                </div>

                <div className="checkout-block">
                    <span>Price</span>
                </div>

                <div className="last-block">
                    <span>Remove</span>
                </div>

            </div>

            {
                cartItems.map(
                    cartItem=> ( <CheckoutItem cartItem={cartItem}/> )
                )
            }

            <div className="total">
                <span>Total: $ {total}</span>
            </div>
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartItemTotal
})

export default connect(mapStateToProps)(CheckoutPage)