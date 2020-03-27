import React from 'react';
import './App.css';
import Home from './components/Home'
import shopPage from './components/shopPage'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/shop" component={shopPage}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
