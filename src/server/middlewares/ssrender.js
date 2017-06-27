import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import App from '../../shared/containers/App/app';
import { routes } from '../../shared/routes/routes';
import Stores from '../../shared/stores/stores';
import { Provider } from 'mobx-react';

export default (req, res) => {
  const context = {};

  let promises = [];

  const stores = new Stores();

  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  routes.some(route => {
    const match = matchPath(req.url, route);
    if (match && route.loadData) promises.push(route.loadData(match, stores));
    return match;
  });

  Promise.all(promises).then(() => {
    const html = ReactDOMServer.renderToString(
      <Provider store={stores}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>,
    );

    if (context.url) {
      res.status(301).setHeader('Location', context.url);
      res.end();
    } else {
      // Render the page with ejs and pass the variables to html
      // Pass the initial state from the stores
      res.render('index', { app: html, state: stores.toJson() });
      res.end();
    }
  });
};
