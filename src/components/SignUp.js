import React,{Component} from 'react'
import CustomButton from './CustomButton'
import {auth,createUserProfileDocument} from './Firebase'

class SignUp extends Component{
    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

   
    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state
        console.log(this.state)
        if(password!==confirmPassword){
            alert("Password Don't match");
            return
        }

        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(e){
            console.log(e);
        }


    }

    render(){
        return(
            <div className="SignUp">
            <h2>I Do not Have an Account</h2>
            <span>sign in with email and password</span>
            <form onSubmit={this.handleSubmit}>

                <div className="inputFields">
                    <label>Name</label><br></br><br></br>
                    <input name='displayName' type='text' value={this.state.displayName} required onChange={this.handleChange}/><br></br>
                </div>

                <div className="inputFields">
                    <label>Email</label><br></br><br></br>
                    <input name='email' type='email' value={this.state.email} required onChange={this.handleChange}/><br></br>
                </div>
                
                <div className="inputFields">
                    <label>Password</label><br></br><br></br>
                    <input name='password' type='password' value={this.state.password} required  onChange={this.handleChange}/><br></br>
                </div>

                <div className="inputFields">
                    <label>Confirm Password</label><br></br><br></br>
                    <input name='confirmPassword' type='password' value={this.state.confirmPassword} required  onChange={this.handleChange}/><br></br>
                </div>
                
                <div className="inputButton">
                    <CustomButton type="submit" value="Submit">Sign up</CustomButton>
                </div>
            </form>
            </div>
        )
    }
}
export default SignUp