/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 15:05:48
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-20 16:28:58
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './assets/css/index.less'
import BasicRoute from '@/routes/index.tsx'

console.log(process.env)
ReactDOM.render(
  <BasicRoute />,
  document.getElementById('root')
)
