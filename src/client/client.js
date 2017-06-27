import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/containers/App/app';
import { Provider } from 'mobx-react';
import Stores from '../shared/stores/stores';

const stores = new Stores(window.__STATE__);

ReactDOM.render(
  <Provider store={stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
