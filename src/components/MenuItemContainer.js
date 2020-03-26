import React from 'react'
import clothes from '../images/clothes.jpeg'
import cloth from '../images/cloth.jpg'

const MenuItemContainer=(props)=>{

    if(props.size==="large"){
        return(
            <div className='ItemContainerLarge'>
                <div className="backgorund-Image"
                    style={
                        {
                            backgroundImage: `url(${clothes})`
                        }
                    }
                />

                <div className="titleContainerLarge">
                    <h1>{props.title}</h1>
                </div>

            </div>
        )
    }else{
        return (
            <div className='ItemContainer'>
            <div className="backgorund-Image"
            style={
                {
                    backgroundImage: `url(${cloth})`
                }
            }
        />
                <div className="titleContainer">
                    <h1>{props.title}</h1>
                </div>
            </div>
        )
    }
   
}

export default MenuItemContainer