import Home from '../containers/Home/home';
import UserDetail from '../containers/UserDetail/userDetail';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: (match, stores) => {
      return stores.user.fetchData();
    },
  },
  {
    path: '/user',
    component: UserDetail,
    loadData: (match, stores) => {
      return stores.user.fetchData();
    },
  },
];

module.exports = { routes };
