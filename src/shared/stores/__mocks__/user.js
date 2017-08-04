'use strict';

import { observable, action } from 'mobx';

export default class UserStore {
  @observable data = [];

  @observable selectedId = '';

  @action
  fetchData() {
    const p = new Promise(resolve => {
      setTimeout(() => {
        this.data = [
          {
            id: 1,
            first_name: 'Trueman',
            last_name: 'Dewdeny',
            email: 'tdewdeny0@oakley.com',
            gender: 'Male',
            ip_address: '227.154.111.182',
          },
          {
            id: 2,
            first_name: 'Derek',
            last_name: 'Martinets',
            email: 'dmartinets1@gravatar.com',
            gender: 'Male',
            ip_address: '82.53.252.253',
          },
          {
            id: 3,
            first_name: 'Dino',
            last_name: 'Pavyer',
            email: 'dpavyer2@phpbb.com',
            gender: 'Male',
            ip_address: '206.150.238.74',
          },
          {
            id: 4,
            first_name: 'Rakel',
            last_name: 'Faherty',
            email: 'rfaherty3@cmu.edu',
            gender: 'Female',
            ip_address: '134.50.37.87',
          },
          {
            id: 5,
            first_name: 'Dallis',
            last_name: 'Trevan',
            email: 'dtrevan4@github.com',
            gender: 'Male',
            ip_address: '245.239.238.230',
          },
          {
            id: 6,
            first_name: 'Abie',
            last_name: 'Duigan',
            email: 'aduigan5@businessweek.com',
            gender: 'Male',
            ip_address: '192.222.148.191',
          },
          {
            id: 7,
            first_name: 'Kenyon',
            last_name: 'Mulliss',
            email: 'kmulliss6@tripadvisor.com',
            gender: 'Male',
            ip_address: '204.185.198.229',
          },
          {
            id: 8,
            first_name: 'Alan',
            last_name: 'Earry',
            email: 'aearry7@independent.co.uk',
            gender: 'Male',
            ip_address: '174.108.84.146',
          },
          {
            id: 9,
            first_name: 'Lisha',
            last_name: 'Marchbank',
            email: 'lmarchbank8@dot.gov',
            gender: 'Female',
            ip_address: '163.42.163.62',
          },
          {
            id: 10,
            first_name: 'Averil',
            last_name: 'Turone',
            email: 'aturone9@sohu.com',
            gender: 'Male',
            ip_address: '9.181.131.233',
          },
        ];
        resolve();
      }, 1000);
    });
    return p;
  }

  @action
  setSelectedId(id) {
    this.selectedId = id;
  }
}
