import { Route, Switch, Redirect } from 'react-router-dom'
import Detail from 'views/detail.tsx'
import * as React from 'react'
import routeConfig from './config.ts'

class BasicRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Detail}>
          {/* 重定向 */}
          <Redirect to="/area" />
        </Route>
        <Route exact path="/area" component={routeConfig.area} />
        <Route exact path="/parking" component={routeConfig.parking} />
        <Route exact path="/charge" component={routeConfig.charge} />
        <Route exact path="/user" component={routeConfig.user} />
      </Switch>
    )
  }
}

export default BasicRoute
