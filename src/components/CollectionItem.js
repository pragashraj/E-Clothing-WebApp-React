import React from 'react'
import women from '../images/women.jpg'

const CollectionItem=({id,name,price,imageUrl})=>{
    return(
        <div className="CollectionItem">
            <div className="image" 
                style={
                    {
                        backgroundImage:`url(${women})`
                    }
                }
            />

            <div className="image-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            
        </div>

    )
}

export default CollectionItem