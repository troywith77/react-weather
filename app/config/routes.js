import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../containers/Main';
import HomeContainer from'../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import DetailContainer from '../containers/DetailContainer';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer}></IndexRoute>
      <Route path='forecast/:city' component={ForecastContainer}></Route>
      <Route path='detail/:city' component={DetailContainer}></Route>
    </Route>
  </Router>
);

export default routes;
