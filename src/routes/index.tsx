import { HashRouter, Route, Switch } from 'react-router-dom'
import Detail from 'views/detail.tsx'
import Home from 'views/index.tsx'
import Area from 'views/area/index.tsx'
import Parking from 'views/parking/index.tsx'
import Charge from 'views/charge/index.tsx'
import User from 'views/user/index.tsx'
import * as React from 'react'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/area" component={Area} />
      <Route exact path="/parking" component={Parking} />
      <Route exact path="/charge" component={Charge} />
      <Route exact path="/user" component={User} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
