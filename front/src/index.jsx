// @flow
import { BrowserRouter, BrowserHistory, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ReactDom from 'react-dom'

import Login from 'Login'
import SignUp from 'SignUp'

const Index = () =>
  <div>
    <Link to='/login'>Login</Link><br/>
    <Link to='/sign_up'>SignUp</Link>
  </div>

ReactDom.render((
  <BrowserRouter history={BrowserHistory}>
    <Switch>
       <Route exact path='/' component={Index} />
       <Route path='/login' component={Login} />
       <Route path='/sign_up' component={SignUp} />
    </Switch>
  </BrowserRouter>
), document.getElementById('index'))
