import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accessible from '../Views/Accessible/Accessible';

function Routes() {
  return (
      <Switch>
        <Route path="/Accessible" component={Accessible}/>
      </Switch>
  );
}

export default Routes;
