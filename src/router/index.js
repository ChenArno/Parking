/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 14:57:20
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-19 11:06:40
 */

import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from 'views/index'
import Detail from 'views/detail'
import HeadView from 'views/header'

const BasicRoute = () => (
  <HashRouter>
    <HeadView />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
