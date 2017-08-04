'use strict';

import { useStrict } from 'mobx';

// Stores
import UserStore from './user';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
useStrict(true);

module.exports = class Stores {
  // Here you add all the stores.
  user = new UserStore();
};
