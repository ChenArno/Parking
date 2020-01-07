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
          <Redirect to="/parking" />
        </Route>
        {routeConfig.map((item: any) => {
          return <Route exact path={`/${item.name}`} component={item.path} />
        })}
      </Switch>
    )
  }
}

export default BasicRoute
