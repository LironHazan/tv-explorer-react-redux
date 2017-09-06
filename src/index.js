import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configure-store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import routes from './routes';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App';
import ShowPage from './components/show-page/show-page.component.js'
import ShowsPage from './components/shows-page/shows-page.component.js'

const store = configureStore({});

ReactDOM.render(
  <Provider className="full-height" store={store}>
    <Router history={browserHistory}>

  <Route path="/" component={App}>
    <IndexRoute component={ShowsPage} />
    <Route path="show" component={ShowPage} />
  </Route>

  </Router>
  </Provider>,
document.getElementById('root'));
