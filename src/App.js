import React, { useState } from 'react'
import { withRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './paths/Home'
import UserInterface from './ui'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <UserInterface open={drawerOpen} setOpen={setDrawerOpen}>
      <Switch>
        <Route
          exact
          path="/home"
          render={props => <Home {...props} setOpen={setDrawerOpen} />}
        />
        <Redirect to="/home" />
      </Switch>
    </UserInterface>
  )
}

export default withRouter(App)
