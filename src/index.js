import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store/index.js';
import { Provider } from 'react-redux'
import routes from "../src/routes.js"
import * as serviceWorker from './serviceWorker';
import "./assets/style/root.scss";

const hist = createBrowserHistory({
  forceRefresh: false
});
  
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hist}>
      <Switch>
        <Route path={routes[0].path}  component={routes[0].component} />    
        <Route path={routes[1].path}  component={routes[1].component} />  
        <Redirect from="/" to={routes[0].path} />
      </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
