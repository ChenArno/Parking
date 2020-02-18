import { Route, Switch, Redirect } from 'react-router-dom'
import index from 'views/index.tsx'
import * as React from 'react'
import routeConfig from './config.ts'
import { connect } from 'react-redux'
import NotFound from '@/views/NotFound.tsx'

class BasicRoute extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
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
            // 控制启动页面时页面的跳转
            return <Redirect to={`/${this.getDefalut()}`} />
          }}
        >
          {/* 重定向 */}
        </Route>
        {routeConfig.map((item: any) => {
          return (
            <Route
              key={item.path}
              exact={item.exact}
              path={item.path}
              component={item.componentName}
            ></Route>
          )
        })}
        <Route
          path="/about"
          render={({ history, location, match }: any) => (
            <div>
              {console.log(history)}
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
          )}
        ></Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    )
  }

  getDefalut() {
    const defaultState = this.props.queryEvent.path
    return defaultState || 'home'
  }
}

export default connect(state => state, {})(BasicRoute)
