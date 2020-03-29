import React from 'react'

const CustomButton=({children,...otherProps})=>{
    return(
        <button className="CustomButton" {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton