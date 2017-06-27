import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes/routes';

import '../../assets/styles/styles.scss';

export default class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, key) => <Route key={key} {...route} />)}
      </Switch>
    );
  }
}
