
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Rotas from './route';

const Main = () => (
  <Router>
    <Switch>
      <Route path="/" component={Rotas} />
    </Switch>
  </Router>
);

export default Main;
