/*
 * @Descripttion: 预加载组件模块
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-25 17:05:07
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-16 11:23:59
 */
import Loading from '@/components/Loading.tsx'
import Loadable from 'react-loadable'

const routeConfig = [
  {
    path: '/area',
    componentName: Loadable({
      loader: () => import('../views/area/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/parking',
    componentName: Loadable({
      loader: () => import('../views/parking/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/parking/detail',
    componentName: Loadable({
      loader: () => import('../views/parking/detail.tsx'),
      loading: Loading
    })
  }, {
    path: '/charge',
    componentName: Loadable({
      loader: () => import('../views/charge/index.tsx'),
      loading: Loading
    }),
    children: [
      {
        path: '/charge/',
        exact: false,
        componentName: Loadable({
          loader: () => import('../views/charge/table.tsx'),
          loading: Loading
        })
      },
      {
        path: '/charge/detail',
        componentName: Loadable({
          loader: () => import('../views/charge/detail.tsx'),
          loading: Loading
        })
      }
    ]
  }, {
    path: '/user',
    componentName: Loadable({
      loader: () => import('../views/user/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/cartype',
    componentName: Loadable({
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