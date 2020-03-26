import React,{Component} from 'react'
import MenuItemConatiner from './MenuItemContainer'

class MenuItems extends Component{
    state={
        Menu:[
            {id:1,title:'Hats'},
            {id:2,title:'Jackets'},
            {id:3,title:'Sneakers'},
            {id:4,title:'Womens',size:'large'},
            {id:5,title:'Mens',size:'large'},
        ]
    }
    render(){
        return(
            <div className="MenuItems">
                {
                    this.state.Menu.map(({id,title,size})=>(
                        <MenuItemConatiner key={id} title={title} size={size}/>
                    ))
                }
               
            </div>
        )
    }
}

export default MenuItems