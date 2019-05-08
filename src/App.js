import React from 'react'
// eslint-disable-next-line no-unused-vars
import { withRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './paths/Home'
import UserInterface from './ui'

const App = () => (
  <>
    <Route path="/" component={UserInterface} />
    <Switch>
      <Route exact path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  </>
)

export default withRouter(App)
