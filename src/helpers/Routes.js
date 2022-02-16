import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accessible from '../Views/AccessibleViews/Accessible/Accessible';
import Main from '../Views/Main/Main';

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/Accessible" component={Accessible}/>
      </Switch>
  );
}

export default Routes;
