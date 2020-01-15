/*
 * @Descripttion: 预加载组件模块
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-25 17:05:07
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-15 15:55:28
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
    name: 'parking/detail',
    path: Loadable({
      loader: () => import('../views/parking/detail.tsx'),
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

export function RouteList() {
  return [
    {
      name: 'charge',
      path: Loadable({
        loader: () => import('../views/charge/table.tsx'),
        loading: Loading
      })
    },
    {
      name: 'charge/:id',
      path: Loadable({
        loader: () => import('../views/charge/detail.tsx'),
        loading: Loading
      })
    }
  ]
}