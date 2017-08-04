/* @flow */

import type { Stores } from '../stores/stores';
import type { $MatchPath } from 'react-router-dom';
import Home from '../containers/Home';
import UserDetail from '../containers/UserDetail';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: (match: $MatchPath, stores: Stores) => {
      return stores.user.fetchData();
    },
  },
  {
    path: '/user',
    component: UserDetail,
    loadData: (match: $MatchPath, stores: Stores) => {
      return stores.user.fetchData();
    },
  },
];

module.exports = { routes };
