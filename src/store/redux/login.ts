/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-30 16:37:36
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-31 15:17:11
 */
import Storage from '@/utils/Storage.ts'
import Keys from '@/utils/keys.ts'

const storage = new Storage()

// 枚举
enum LOGIN {
  IN = 'LOGIN',
  OUT = 'LOGOUT'
}
// 接口定义
// 可以用 keyof 来获取一个接口的所有 key 组成的联合类型
interface LoginState {
  isAuth: boolean
  userName: string
  id?: number
  [key: string]: LoginState[keyof LoginState]
}
const info = storage.getValue(Keys.UserInfo)
if (!info) {
  storage.setValue(Keys.UserInfo, {
    isAuth: false,
    userName: '陈',
    id: 898
  })
}
const loginState: LoginState = storage.getValue(Keys.UserInfo)
// reducer
export function auth(state = loginState, action: any) {
  switch (action.type) {
    case LOGIN.IN:
      // 对象合并
      return { ...state, isAuth: true }
    case LOGIN.OUT:
      return { ...state, isAuth: false }
    default:
      return state
  }
}

// action
export function login() {
  return { type: LOGIN.IN }
}

export function logout() {
  return { type: LOGIN.OUT }
}