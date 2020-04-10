import React,{Component} from 'react'
import women from '../images/women.jpg'
import {connect} from 'react-redux'
import {addItem} from './Redux/cartAction'

class CollectionItem extends Component{
    state={
       id:this.props.items.id,
       name:this.props.items.name,
       imageUrl:this.props.items.imageUrl,
       price:this.props.items.price
    }
    handleSubmit=(e)=>{
        const item=this.state
        e.preventDefault()
        console.log(item)
        this.props.addItem(item)
    }
    render(){
            const {name,price}=this.props.items;
            return(
                <div className="CollectionItem">
                    <div className="image" 
                        style={
                            {
                                backgroundImage:`url(${women})`
                            }
                        }

                    >
                    <div className="cart-div"><button className="Add-cart-btn" onClick={this.handleSubmit}>Add To Cart</button></div>
                     
                    </div>

                    <div className="image-footer">
                        <span className="name">{name}</span>
                        <span className="price">${price}</span>
                    </div>
                    
                </div>
            )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addItem: (item) => dispatch(addItem(item))
    }
}


const mapStateToProps=({cart:{item}})=>{
    return{
        arrayItem:item
    }  
}
export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem)