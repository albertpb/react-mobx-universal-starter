/* @flow */

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

@inject('stores')
@observer
export default class UserDetail extends Component {
  static propTypes = {
    stores: PropTypes.object,
  };

  render() {
    const userSelected = _.find(this.props.stores.user.data, u => {
      return u.id === this.props.stores.user.selectedId;
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
