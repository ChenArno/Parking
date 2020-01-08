/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2020-01-03 10:40:48
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-08 15:45:13
 */
enum FormData {
  query = 'query',
  menuIndex = 'menuIndex'
}
interface FormDataState {
  path?: string
  [key: string]: FormDataState[keyof FormDataState]
}

const formDataState: FormDataState = {
  path: 'home'
}

export function queryEvent(state = formDataState, action: any) {
  switch (action.type) {
    case FormData.query:
      return { ...state, ...action.val }
    case FormData.menuIndex:
      return { ...state, path: action.val }
    default:
      return state
  }
}

export function query(val: any) {
  return { type: FormData.query, val }
}

export function selectMenu(val: string) {
  return { type: FormData.menuIndex, val }
}