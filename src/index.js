/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 15:05:48
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-20 11:01:36
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './router'
import background from './assets/images/background.jpg'
import './assets/css/index.less'

console.log(process.env)
ReactDOM.render(<App />, document.getElementById('root'))
