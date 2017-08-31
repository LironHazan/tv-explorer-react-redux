import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import configureStore from './store/configure-store';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore({shows: [],});

ReactDOM.render(
/*<App className="full-height"/>,*/
  <Provider className="full-height" store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
document.getElementById('root'));

//registerServiceWorker();
