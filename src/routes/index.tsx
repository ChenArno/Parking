import { Route, Switch, Redirect } from 'react-router-dom'
import index from 'views/index.tsx'
import * as React from 'react'
import routeConfig from './config.ts'
import NotFound from '@/views/NotFound.tsx'

class BasicRoute extends React.Component {
  render() {
    return (
      // 注意：如果路由 Route 外部包裹 Switch 时，路由匹配到对应的组件后，就不会继续渲染其他组件了。
      // 但是如果外部不包裹 Switch 时，所有路由组件会先渲染一遍，然后选择到匹配的路由进行显示。
      <Switch>
        {/* exact : 既路由path='/page'会匹配路由path='/'和路由path='/page' */}
        <Route exact path="/home" component={index} />
        <Route
          exact
          path="/"
          component={() => {
            return <Redirect to="/home" />
          }}
        >
          {/* 重定向 */}
        </Route>
        {routeConfig.map((item: any) => {
          return (
            <Route
              key={item.name}
              exact
              path={`/${item.name}`}
              component={item.path}
            ></Route>
          )
        })}
        <Route path="/about" component={() => <div>{this.props.children}</div>}>
          <div>
            <Switch>
              <Redirect from="/about" to="/about/page1" exact></Redirect>
              <Route
                path="/about/page1"
                exact
                component={() => <div>about-page-1</div>}
              />
              <Route
                path="/about/page2"
                exact
                component={() => <div>about-page-2</div>}
              />
            </Switch>
          </div>
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    )
  }
}

export default BasicRoute
