import React,{Component} from 'react'
import shopData from './shopData'
import ShopCollectionPreview from './ShopCollectionPreview'

class shopPage extends Component{
    state={
       collections:shopData
    }
    render(){
        const {collections}=this.state
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

}

export default shopPage