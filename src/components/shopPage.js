import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import ShopCollectionPreview from './ShopCollectionPreview'
import {selectShopCollections} from './Redux/shop.selectors'
const shopPage=({collections})=> {

        return(
            <div className="shopPage">
                {
                    collections.map(({id,title,items})=>(
                        <ShopCollectionPreview key={id} title={title} items={items}></ShopCollectionPreview>
                     ))
                }
            </div>
        )

}

const mapStateToProps=createStructuredSelector({
    collections:selectShopCollections
})

export default connect(mapStateToProps)(shopPage)