import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/configure-store';
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App';
import ShowPage from './components/show-page/show-page.component.js'

const store = configureStore({});

ReactDOM.render(
 <Provider className="full-height" store={store}>
   <Router history={createBrowserHistory()}>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/show/:showid" to="/" component={ShowPage}/>
    </div>
  </Router>
 </Provider>,
document.getElementById('root'));
