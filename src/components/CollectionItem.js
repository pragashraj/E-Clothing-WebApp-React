import React from 'react'
import women from '../images/women.jpg'
import {connect} from 'react-redux'
import {addItem} from './Redux/cartAction'

const CollectionItem=({items,addItem})=>{
    const {name,price,imageUrl}=items;
    return(
        <div className="CollectionItem">
            <div className="image" 
                style={
                    {
                        backgroundImage:`url(${women})`
                    }
                }

            >
            <div className="cart-div"><button className="Add-cart-btn" onClick={()=>addItem(items)}>Add To Cart</button></div>
            </div>

            <div className="image-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            
        </div>

    )
}

const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)