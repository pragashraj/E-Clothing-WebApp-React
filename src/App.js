import React ,{Component} from 'react';
import './App.css';

import Home from './components/Home'
import shopPage from './components/shopPage'
import SignInPage from './components/SignInPage'
import CheckoutPage from './components/ChekoutPage'

import {Route,Switch,BrowserRouter,Redirect} from 'react-router-dom'
import NavBar from './components/NavBar'

import {auth,createUserProfileDocument} from './components/Firebase'
import {connect} from 'react-redux'
import {setCurrentUser} from './components/Redux/userAction'

class App extends Component {

  unsubscribeFromAuth=null;
  componentDidMount() {
    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot(snapShot => {
        //   setCurrentUser({
        //     id: snapShot.id,
        //     ...snapShot.data()
        //   });
        // });
        setCurrentUser(userAuth);
      }

      setCurrentUser(userAuth);
    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/shop" component={shopPage}/>
            <Route  path="/SignIn" 
                    render={()=>
                      this.props.currentUser ? (<Redirect to='/'/>):(<SignInPage/>)
                    }
            />

            <Route exact path="/checkout" component={CheckoutPage}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
