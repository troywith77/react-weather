import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'))
