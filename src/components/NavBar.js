import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from './Firebase'
import {connect} from 'react-redux'
import CartIcon from './Cart'
import CartDropDown from './CartDropDown'
const NavBar =({currentUser,hidden})=>{
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

                <CartIcon/>
            </div>
            {
                hidden ? null :<CartDropDown/>
            }
            
        </div>
    )
}
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(NavBar)