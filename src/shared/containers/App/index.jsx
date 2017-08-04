/* @flow */

import '../../assets/styles/styles.scss';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes/routes';
import DevTools from 'mobx-react-devtools';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <DevTools />
        <Switch>
          {routes.map((route, key) => <Route key={key} {...route} />)}
        </Switch>
      </div>
    );
  }
}
