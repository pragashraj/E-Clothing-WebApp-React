import React from 'react'
import CollectionItem from './CollectionItem'

const ShopCollectionPreview=({title,items})=>{
    return(
        <div className="collection-preview">
            <h1 className="Title">{title.toUpperCase()}</h1>
                <div className="preview">
                        {
                            items.filter((items,idx)=>idx<4)
                                 .map(items=>(
                                     <CollectionItem key={items.id} items={items}/>
                                 ))
                        }
                </div>
        </div>
    )
}

export default ShopCollectionPreview