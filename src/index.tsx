/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 15:05:48
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-23 10:39:48
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './assets/css/index.less'
// import Detial from 'views/detail.tsx'
import BasicRoute from '@/routes/index.tsx'

console.log(process.env)
ReactDOM.render(
  <BasicRoute />,
  document.getElementById('root')
)
