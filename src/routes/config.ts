/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-25 17:05:07
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-25 17:11:58
 */
import Loading from '@/components/Loading.tsx'
import Loadable from 'react-loadable'

const routeConfig = {
  area: Loadable({
    loader: () => import('views/area/index.tsx'),
    loading: Loading
  }),
  parking: Loadable({
    loader: () => import('views/parking/index.tsx'),
    loading: Loading
  }),
  charge: Loadable({
    loader: () => import('views/charge/index.tsx'),
    loading: Loading
  }),
  user: Loadable({
    loader: () => import('views/user/index.tsx'),
    loading: Loading
  })
}

export default routeConfig