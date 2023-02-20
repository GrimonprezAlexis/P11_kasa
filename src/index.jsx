import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux'

import Home from './pages/Home';
import About from './pages/About';
import LogementDetail from './pages/Logement';
import error404 from './pages/Error';

import store from './store'
import './css/Index/index.scss';

ReactDOM.render(
    <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/logements/:id" component={LogementDetail} />
        <Route exact path="/error404" component={error404} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
  