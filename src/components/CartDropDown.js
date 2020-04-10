import React from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import {selectCartItems} from './Redux/cart.selectors'
import {withRouter} from 'react-router-dom'

const CartDropDown=({cartItems,history})=>{
    return(
        <div className="cart-dropDown">
            <div className="cart-items">
                    {
                        cartItems.length ? (
                            cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            ))
                        ) 
                        : <span className="empty-message">Cart is Empty</span>
                        
                
                    }
            </div>
            <div className="cart-div"><button className="cart-btn" onClick={()=>history.push('/checkout')}>Go To CheckOut</button></div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
  });

export default withRouter(connect(mapStateToProps)(CartDropDown))