import React from 'react'
import { withRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './paths/Home'
import UserInterface from './ui'

const App = () => (
  <UserInterface>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  </UserInterface>
)

export default withRouter(App)
