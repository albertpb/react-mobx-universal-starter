import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('store')
@observer
export default class Home extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  setSelectedId(id) {
    this.props.store.user.setSelectedId(id);
  }

  render() {
    const userList = this.props.store.user.data.map((user, key) => {
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
        <div>{userList}</div>
      </div>
    );
  }
}
