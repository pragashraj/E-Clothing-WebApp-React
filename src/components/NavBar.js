import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from './Firebase'

const NavBar =({currentUser})=>{
    return(
        <div className="NavBar">
            <div className="options">
                <Link to="/">HOME</Link>
                <Link to="/shop">SHOP</Link>
                
                {
                    currentUser ?
                    <Link onClick={()=>auth.signOut()}>SIGN-OUT</Link>
                    :
                    <Link to="/SignIn">SIGN-IN</Link>
                }
            </div>
        </div>
    )
}

export default NavBar