/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 15:05:48
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-22 16:12:07
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './assets/css/index.less'
// import Detial from 'views/detail.tsx'
import BasicRoute from '@/routes/index.tsx'
// import 'antd/dist/antd.css'

console.log(process.env)
ReactDOM.render(
  <BasicRoute />,
  document.getElementById('root')
)
