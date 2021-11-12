import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import {
  AppDiv,
} from './IndexElements';

function App() {
  return (
    <AppDiv className="AppDiv">
      <Router>
        <Routes>
        </Routes>
      </Router>
    </AppDiv>
  );
}

export default App;
