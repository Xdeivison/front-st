
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CommonRoutes } from './public_routes';

function Rotas(): JSX.Element {
  return (
    <Switch>
      <Route path='/*' component={CommonRoutes} />
    </Switch>
  );
}

export default Rotas;
