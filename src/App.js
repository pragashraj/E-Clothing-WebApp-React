import React from 'react';
import './App.css';
import Home from './components/Home'
import shopPage from './components/shopPage'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import SignInPage from './components/SignInPage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/shop" component={shopPage}/>
          <Route  path="/SignIn" component={SignInPage}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
