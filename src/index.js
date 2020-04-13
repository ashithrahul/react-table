import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import './global.scss';



const RouterComponent = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      {/*<Route path="/login" component={DropDown} />*/}
    </Switch>
  </Router>

);

ReactDOM.render(
  <RouterComponent />,
  document.getElementById('app'),
);
