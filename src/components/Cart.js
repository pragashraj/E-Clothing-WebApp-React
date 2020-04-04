import React from 'react'
import cart from '../images/cart2.png';
import {connect} from 'react-redux'
import {toggleCartHidden} from './Redux/cartAction'

const CartIcon=({toggleCartHidden})=>{
    return(
        <div className="Cart-icon" onClick={toggleCartHidden}>
            <img src={cart} alt='cart' className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)