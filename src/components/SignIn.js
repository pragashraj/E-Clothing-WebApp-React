import React,{Component} from 'react'
import CustomButton from './CustomButton'
import {auth,signInWithGoogle} from './Firebase'

class SignIn extends Component{
    state={
        email:'',
        password:''
    }

    handleSubmit=async e=>{
        e.preventDefault();
        const {email,password}=this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email:'',
                password:''
            })
        }catch(e){
            console.log(e);
        }
    
    }

    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className="SignIn">
                <h2>I Already Have an Account</h2>
                <span>sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <div className="inputFields">
                        <label>Email</label><br></br><br></br>
                        <input name='email' type='email' value={this.state.email} required onChange={this.handleChange}/><br></br>
                    </div>
                    
                    <div className="inputFields">
                        <label>Password</label><br></br><br></br>
                        <input name='password' type='password' value={this.state.password} required  onChange={this.handleChange}/><br></br>
                    </div>
                    
                    <div className="inputButton">
                        <CustomButton type="submit" value="Submit">Sign In</CustomButton>
                    </div>

                    <div className="inputButton">
                        <CustomButton onClick={signInWithGoogle} isGoogle>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn