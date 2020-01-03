/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2020-01-03 10:40:48
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-03 11:26:17
 */
enum FormData {
  query = 'query'
}
interface FormDataState {
  id?: number
  [key: string]: FormDataState[keyof FormDataState]
}

const formDataState: FormDataState = {

}

export function queryEvent(state = formDataState, action: any) {
  switch (action.type) {
    case FormData.query:
      return { ...state, ...action.val }
    default:
      return state
  }
}

export function query(val: any) {
  return { type: FormData.query, val }
}