import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Home from './paths/Home'

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
)

export default withRouter(App)
