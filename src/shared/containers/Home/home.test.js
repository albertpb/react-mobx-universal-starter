'use strict';

import React from 'react';
import Home from './index';
import { shallow } from 'enzyme';

jest.mock('../../stores/stores');
var Stores = require('../../stores/stores');
const store = new Stores();

describe('render Home with user store', function() {
  beforeAll(function() {
    return store.user.fetchData();
  });

  it('render Home', function() {
    // test if user list is > 1
    expect(store.user.data.length).toBeGreaterThanOrEqual(1);

    const wrapper = shallow(<Home stores={store} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
