import React,{Component} from 'react'

class SignIn extends Component{
    state={
        email:'',
        password:''
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.email,this.state.password);
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
                    <label>Email</label>
                    <input name='email' type='email' value={this.state.email} required onChange={this.handleChange}/>

                    <label>Password</label>
                    <input name='password' type='password' value={this.state.password} required  onChange={this.handleChange}/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn