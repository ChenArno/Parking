/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-30 16:37:36
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-30 17:28:42
 */
// 枚举
enum LOGIN {
  IN = 'LOGIN',
  OUT = 'LOGOUT'
}
// 接口定义
interface LoginState {
  isAuth: boolean
  userName: string
}
const loginState: LoginState = {
  isAuth: false,
  userName: '陈'
}

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