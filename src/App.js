import React from 'react';
import './App.css';
import Home from './components/Home'
import {Route,Switch,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
