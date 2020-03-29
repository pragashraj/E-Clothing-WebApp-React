import React from 'react'

const FormInput=({hadleChange,label,...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" onChange={hadleChange} {...otherProps}/>
        </div>
    )
}

export default FormInput