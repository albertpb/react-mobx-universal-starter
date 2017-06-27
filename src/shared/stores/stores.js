/* @flow */

import { useStrict } from 'mobx';
import _ from 'lodash';

// Stores
import UserStore from './user';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
useStrict(true);

export default class Stores {
  // Here you add all the stores.
  user = new UserStore();

  constructor(initialState: (?number)[] = [null]) {
    // Set the intial value to each corresponding store
    _.forEach(initialState, (value, key) => {
      switch (key) {
        case 'user':
          this.user = new UserStore(value);
          return;
        default:
          break;
      }
    });
  }

  toJson() {
    return JSON.stringify({
      user: this.user,
    });
  }
}

export type { Stores };
