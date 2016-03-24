var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var HomeContainer = require('../containers/HomeContainer');
var ForecastContainer = require('../containers/ForecastContainer');
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

module.exports = routes;
