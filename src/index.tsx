/*
 * @Descripttion:
 * @version:
 * @Author: chenArno
 * @Date: 2019-12-12 15:05:48
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-30 16:52:17
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './assets/css/index.less'
// import Detial from 'views/detail.tsx'
import App from '@/views/App.tsx'
import { Provider } from 'react-redux'
import store from '@/store/index.ts'

// console.log(process.env)
if (navigator.userAgent.indexOf('MSIE 9.0') !== -1) {
  alert('你的浏览器版本过低,请下载最新版本,或使用谷歌浏览器体验最好的效果')
  window.location.href = 'https://www.google.cn/intl/zh-CN/chrome/'
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
