import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Detail from 'views/detail.tsx'
import Home from 'views/index.tsx'

const BasicRoute = (): any => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
