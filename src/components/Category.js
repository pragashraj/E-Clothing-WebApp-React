import React from 'react'
import CollectionItem from './CollectionItem'
import {connect} from 'react-redux'
import {selectCollection} from './Redux/shop.selectors'

const Category=({match,collection})=>{
    const {title,items}=collection
    return (
        <div className="category">
            <h2>{title}</h2>
            <div className="item">
                {
                    items.map(
                        item=><CollectionItem key={item.id} items={item}/>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
    return{
        collection:selectCollection(ownProps.match.params.collectionId)(state)
    }
}
export default connect(mapStateToProps)(Category)