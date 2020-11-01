import './App.css';
import React from 'react'
import {Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Info from './Info';
import ShootDetails from './ShootDetails';


function App() {
  return (<>

  <Nav />
  <div className='app'>
    <Switch>
      <Route exact path='/' component={Info} />
      <Route path='/shoot-details' component={ShootDetails} />
    </Switch>
  </div>
  
  

  </>);
}

export default App;
