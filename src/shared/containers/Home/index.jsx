/* @flow */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('stores')
@observer
export default class Home extends Component {
  static propTypes = {
    stores: PropTypes.object,
  };

  setSelectedId(id: string) {
    this.props.stores.user.setSelectedId(id);
  }

  render() {
    const userList = this.props.stores.user.data.map((user, key) => {
      return (
        <div key={key}>
          <Link to="/user" onClick={this.setSelectedId.bind(this, user.id)}>
            {user.first_name}
          </Link>
        </div>
      );
    });

    return (
      <div>
        <p>User List</p>
        <div>
          {userList}
        </div>
      </div>
    );
  }
}
