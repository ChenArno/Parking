/*
 * @Descripttion: 预加载组件模块
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-25 17:05:07
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-07 11:02:53
 */
import Loading from '@/components/Loading.tsx'
import Loadable from 'react-loadable'

const routeConfig = [
  {
    name: 'area',
    path: Loadable({
      loader: () => import('../views/area/index.tsx'),
      loading: Loading
    })
  }, {
    name: 'parking',
    path: Loadable({
      loader: () => import('../views/parking/index.tsx'),
      loading: Loading
    })
  }, {
    name: 'charge',
    path: Loadable({
      loader: () => import('../views/charge/index.tsx'),
      loading: Loading
    })
  }, {
    name: 'user',
    path: Loadable({
      loader: () => import('../views/user/index.tsx'),
      loading: Loading
    })
  }, {
    name: 'cartype',
    path: Loadable({
      loader: () => import('../views/cartype/index.tsx'),
      loading: Loading
    })
  }
]

export default routeConfig