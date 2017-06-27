/* @flow */

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

@inject('store')
@observer
export default class UserDetail extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const userSelected = _.find(this.props.store.user.data, u => {
      return u.id === this.props.store.user.selectedId;
    });

    return (
      <div>
        <h3>
          {userSelected && userSelected.first_name
            ? userSelected.first_name
            : 'Not user selected'}
        </h3>
      </div>
    );
  }
}
