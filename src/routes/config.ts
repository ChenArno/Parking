/*
 * @Descripttion: 预加载组件模块
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-25 17:05:07
 * @LastEditors: chenArno
 * @LastEditTime: 2020-02-19 13:32:07
 */
import Loading from '@/components/Loading.tsx'
import Loadable from 'react-loadable'

const routeConfig = [
  {
    path: '/area',
    exact: true,
    componentName: Loadable({
      loader: () => import('../views/area/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/parking',
    exact: true,
    componentName: Loadable({
      loader: () => import('../views/parking/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/parking/detail',
    exact: true,
    componentName: Loadable({
      loader: () => import('../views/parking/detail.tsx'),
      loading: Loading
    })
  }, {
    path: '/charge',
    // exact是Route下的一个属性，react路由会匹配到所有能匹配到的路由组件，exact能够使得路由的匹配更严格一些。
    // 匹配多级路由需配置exact
    exact: false,
    componentName: Loadable({
      loader: () => import('../views/charge/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/user',
    exact: true,
    componentName: Loadable({
      loader: () => import('../views/user/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/cartype',
    exact: true,
    componentName: Loadable({
      loader: () => import('../views/cartype/index.tsx'),
      loading: Loading
    })
  }, {
    path: '/tianqi',
    exact: true,
    componentName: Loadable({
      loader: () => import('../views/other/tianqi.tsx'),
      loading: Loading
    })
  }, {
    path: '/paly',
    exact: true,
    componentName: Loadable({
      loader: () => import('../views/palyVideo/index.tsx'),
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