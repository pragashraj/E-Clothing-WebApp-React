import React from 'react'
import cartImage from '../images/cart2.png';
import {connect} from 'react-redux'
import {toggleCartHidden} from './Redux/cartAction'
import {selectCartItemCount} from './Redux/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartIcon=({toggleCartHidden,itemCount})=>{
    return(
        <div className="Cart-icon" onClick={toggleCartHidden}>
            <img src={cartImage} alt='cart' className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)