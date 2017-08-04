'use strict';

import React from 'react';
import UserDetail from './index';
import { shallow } from 'enzyme';

jest.mock('../../stores/stores');
var Stores = require('../../stores/stores');
const store = new Stores();

describe('render UserDetail with user store', function() {
  beforeAll(function() {
    return store.user.fetchData();
  });

  it('render UserDetail', function() {
    store.user.setSelectedId(1);
    // test if user list is > 1
    expect(store.user.data.length).toBeGreaterThanOrEqual(1);

    const wrapper = shallow(<UserDetail stores={store} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.render().find('h3').first().text()).toBe('Trueman');
  });
});
