/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-30 16:37:36
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-03 10:50:41
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

const loginState: LoginState = storage.getValue(Keys.UserInfo, true)
// reducer
// action 指login和logout事件
export function auth(state = loginState, action: any) {
  let res = state
  switch (action.type) {
    case LOGIN.IN:
      // 对象合并
      res = { ...state, isAuth: true }
      break
    case LOGIN.OUT:
      res = { ...state, isAuth: false }
      break
    default:
      break
  }
  storage.setValue(Keys.UserInfo, res)
  return res
}

// action
export function login() {
  return { type: LOGIN.IN }
}

export function logout() {
  return { type: LOGIN.OUT }
}