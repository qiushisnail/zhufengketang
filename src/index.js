import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import Mime from './containers/Mime'
import Profile from './containers/Profile'
import Layout from './containers/layout';
import store from './store';
import { Provider } from 'react-redux';
import Detail from './containers/Detail';
import Login from './containers/Login';
import Reg from './containers/Reg';
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/mime" component={Mime}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/reg" component={Reg}></Route>
        </Switch>
      </Layout>
    </Router>
  </Provider>
  , document.querySelector('#root')
)