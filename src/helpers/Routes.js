import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accessible from '../Views/AccessibleViews/Accessible/Accessible';
import Main from '../Views/Main/Main';

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Accessible}/>
        <Route exact path="/Accessible" component={Main}/>
      </Switch>
  );
}

export default Routes;
