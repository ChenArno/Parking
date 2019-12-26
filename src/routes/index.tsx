import { HashRouter, Route, Switch } from 'react-router-dom'
import Detail from 'views/detail.tsx'
import * as React from 'react'
import routeConfig from './config.ts'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={routeConfig.area} />
      <Route exact path="/pages/area" component={routeConfig.area} />
      <Route exact path="/pages/parking" component={routeConfig.parking} />
      <Route exact path="/pages/charge" component={routeConfig.charge} />
      <Route exact path="/pages/user" component={routeConfig.user} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
