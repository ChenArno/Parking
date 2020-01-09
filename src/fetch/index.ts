/*
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2020-01-09 14:29:23
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-09 14:41:48
 */
import axios from 'axios'
// import { Component } from 'react'

let baseUrl = '/'
// 请求前拦截,比如注入token

const service = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 60
})
service.interceptors.request.use(
  (config: any) => {
    return config
  }, (err: Error) => {
    console.log('请求超时')
    return Promise.reject(err)
  }
)

// 请求返回后的拦截
service.interceptors.response.use(
  (res: any) => {
    console.log(res)
    return res
  }, (err: any) => {
    let { status } = err.response
    if (status === 504 || status === 404) {
      console.log('找不到服务器')
    } else if (status === 401) {
      console.log('登录信息失效')
    } else if (status === 500) {
      console.log('服务器出错了')
    }
    return Promise.reject(err)
  }
)

export default service
