import React from 'react'
import {Link} from 'react-router-dom'

const NavBar =()=>{
    return(
        <div className="NavBar">
            <div className="options">
                <Link to="/">HOME</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/SignIn">SIGN-IN</Link>
            </div>
        </div>
    )
}

export default NavBar