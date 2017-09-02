import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ShowPage from './components/show-page/show-page.component.js'
import ShowsPage from './components/shows-page/shows-page.component.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ShowsPage} />
    <Route path="show" component={ShowPage} />
  </Route>
);
