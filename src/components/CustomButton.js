import React from 'react'

const CustomButton=({children,isGoogle,...otherProps})=>{
    if(isGoogle){
        return(
            <button className="CustomButtonGoogle" {...otherProps}>
                {children}
            </button>
        )
    }
    else{
        
        return(
            <button className="CustomButton" {...otherProps}>
                {children}
            </button>
        )
    }
    
}
export default CustomButton