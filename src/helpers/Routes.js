import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Accessible from '../Views/AccessibleViews/Accessible/Accessible';
import Main from '../Views/Main/Main';
import Mesi from '../Views/AccessibleViews/Mesi/Mesi';
import LLL from '../Views/AccessibleViews/LLL/LLL';
import Gratitude from '../Views/AccessibleViews/Gratitude/Gratitude';
import WM from '../Views/AccessibleViews/WM/WM';
import Axiom from '../Views/AccessibleViews/Axiom/Axiom';
import Serving from '../Views/AccessibleViews/Serving/Serving';
import NSS from '../Views/AccessibleViews/NSS/NSS';
import MTSU from '../Views/AccessibleViews/MTSU/MTSU';
import VSCC from '../Views/AccessibleViews/VSCC/VSCC';

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Accessible}/>
        <Route exact path="/MESI" component={Mesi}/>
        <Route exact path="/LLLEmporium" component={LLL}/>
        <Route excat path="/Gratitude" component={Gratitude}/>
        <Route exact path="/WasteManagement" component={WM}/>
        <Route exact path="/AxiomInstalls" component={Axiom}/>
        <Route exact path="/Serving" component={Serving}/>
        <Route exact path="/NSS" component={NSS}/>
        <Route exact path="/MTSU" component={MTSU}/>
        <Route exact path="/VolunteerState" component={VSCC}/>
        <Route exact path="/Accessible" component={Main}/>
      </Switch>
  );
}

export default Routes;
