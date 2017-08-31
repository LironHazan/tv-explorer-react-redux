import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
//import HomePage from './components/home/HomePage';
//import CompaniesPage from './components/company/CompaniesPage';

   // <IndexRoute component={HomePage} />
  //  <Route path="companies/:groupId" component={CompaniesPage} />
export default (
  <Route path="/" component={App}>

  </Route>
);
