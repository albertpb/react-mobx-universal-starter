/* @flow */

import { observable, action } from 'mobx';
import axios from 'axios';
import { config } from '../../config';
import _ from 'lodash';

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
        .get('http://www.mocky.io/v2/59513eba1200009b128c7af2', config.axios)
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
