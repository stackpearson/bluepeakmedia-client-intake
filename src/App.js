import './App.css';
import React from 'react'
import {Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import ClientInfoForm from './ClientInfoForm';
import Info from './Info';
import ShootForm from './ShootForm';


function App() {
  return (<>

  <Nav />
  <div className='app'>
    <Switch>
      <Route exact path='/' component={Info} />
      <Route path='/name' component={ClientInfoForm} />
      <Route path='/shoot-details' component={ShootForm} />
    </Switch>
  </div>
  
  

  </>);
}

export default App;
