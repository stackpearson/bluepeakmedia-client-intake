import './App.css';
import React from 'react'
import {Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import ClientInfoForm from './ClientInfoForm';
import Info from './Info';

function App() {
  return (<>

  <Nav />
  <div className='app'>
    <Switch>
      <Route exact path='/' component={Info} />
      <Route path ='/name' component={ClientInfoForm} />
    </Switch>
  </div>
  
  

  </>);
}

export default App;
