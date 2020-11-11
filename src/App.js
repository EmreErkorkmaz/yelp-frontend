import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {LandingPage} from './LandingPage/LandingPage';
import Search from './Search/Search';

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={LandingPage}/>
    </Switch>
    
  );
}

export default App;
