/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-30 16:37:36
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-30 16:47:07
 */
enum LOGIN {
  IN = 'LOGIN',
  OUT = 'LOGOUT'
}

export function auth(state = { isAuth: false, user: '陈' }, action: any) {
  switch (action.type) {
    case LOGIN.IN:
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