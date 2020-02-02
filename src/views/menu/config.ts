/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-26 09:20:38
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-08 15:33:34
 */
// 这里本来可以直接写 [key:string]: any;
// 但如果在 key 确定的情况下，可以用 keyof 来获取一个接口的所有 key 组成的联合类型，
// 然后用 index types 获取 value 的类型。
// 这样相比 any 能对 value 的类型有一个限制。
export interface MenuList {
  id: string,
  label?: string,
  icon?: string,
  path?: string,
  [key: string]: MenuList[keyof MenuList]
}

const menusLists: Array<MenuList> = [
  { id: 'home', label: '首页', icon: 'desktop', path: '' },
  { id: 'parking', label: '车位管理', icon: 'desktop', path: 'parking' },
  { id: 'area', label: '车辆区域', icon: 'flag', path: 'area' },
  { id: 'charge', label: '收费管理', icon: 'shop', path: 'charge' },
  { id: 'cartype', label: '类型管理', icon: 'appstore-o', path: 'cartype' },
  { id: 'user', label: '用户管理', icon: 'user', path: 'user' }
]

const requestMenu = () => {
  return new Promise((resolve: any, reject: any) => {
    if (menusLists.length > 0) {
      resolve(menusLists)
    } else {
      reject(new Error('get data is faile'))
    }
  })
}

// 超过5s请求超时
const getMenuConfig = () => {
  return Promise.race([requestMenu(), new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('request is timeout'))
    }, 5000)
  })])
}

export default getMenuConfig