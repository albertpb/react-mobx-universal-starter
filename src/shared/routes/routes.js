/* @flow */

import type { Stores } from '../stores/stores';
import type { $MatchPath } from 'react-router-dom';
import Home from '../containers/Home/home';
import UserDetail from '../containers/UserDetail/userDetail';

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
