/* @flow */

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('stores')
@observer
export default class About extends Component {
  render() {
    return <div>About</div>;
  }
}
