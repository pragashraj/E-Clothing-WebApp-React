import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import ShopCollectionPreview from './ShopCollectionPreview'
import {selectCollectionsForPreview} from './Redux/shop.selectors'

const CollectionOverView=({collections})=>{
    return(
        <div className="shopPage">
            {
                collections.map(({id,...otherCollectionProps})=>(
                    <ShopCollectionPreview key={id}  {...otherCollectionProps}></ShopCollectionPreview>
                 ))
            }
        </div>
    )

}

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverView)