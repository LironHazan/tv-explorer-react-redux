import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configure-store';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore({});

ReactDOM.render(
  <Provider className="full-height" store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
document.getElementById('root'));
