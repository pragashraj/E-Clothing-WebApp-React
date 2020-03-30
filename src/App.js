import React ,{Component} from 'react';
import './App.css';
import Home from './components/Home'
import shopPage from './components/shopPage'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import SignInPage from './components/SignInPage'
import {auth,createUserProfileDocument} from './components/Firebase'

class App extends Component {
  state={
    currentUser:null
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
            this.setState({
              currentUser:{
                id:snapShot.id,
                ...snapShot.data()
              }
            })

        })
      }

      this.setState({currentUser:userAuth});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <NavBar currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/shop" component={shopPage}/>
            <Route  path="/SignIn" component={SignInPage}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
