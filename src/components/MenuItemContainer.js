import React from 'react'
import women from '../images/women.jpg'

const MenuItemContainer=(props)=>{
    if(props.size==="large"){
        return(
            <div className='ItemContainerLarge'>
                <div className="backgorund-Image"
                    style={
                        {
                            backgroundImage: `url(${women})`
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
                    backgroundImage: `url(${women})`
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