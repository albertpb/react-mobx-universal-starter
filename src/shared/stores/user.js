/* @flow */

import { observable } from 'mobx';
import axios from 'axios';
import _ from 'lodash';
import { action } from 'mobx';

export default class UserStore {
  @observable data = [];

  @observable selectedId = '';

  constructor(initialState: (?number)[] = [null]) {
    _.forEach(initialState, (value, key) => {
      switch (key) {
        case 'data':
          this.data = value;
          break;
        default:
          break;
      }
    });
  }

  @action
  fetchData() {
    const p = new Promise((resolve, reject) => {
      axios
        .get('http://www.mocky.io/v2/59513eba1200009b128c7af2')
        .then(response => {
          this.data = response.data;
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
    return p;
  }

  @action
  setSelectedId(id: string) {
    this.selectedId = id;
  }
}
