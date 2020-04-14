import React from 'react'
import {Route} from 'react-router-dom'
import CollectionOverView from './CollectionOverView'
import Category from './Category'

const shopPage=({match})=> {
    
        return(
            <div className="shopPage">
                <Route exact path={`${match.path}`} component={CollectionOverView}/>
                <Route path={`${match.path}/:collectionId`} component={Category} />
            </div>
        )

}



export default shopPage