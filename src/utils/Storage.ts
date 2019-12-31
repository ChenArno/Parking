/*
 * @Descripttion: 
 * @version: 
 * @Author: chenArno
 * @Date: 2019-12-31 11:13:00
 * @LastEditors  : chenArno
 * @LastEditTime : 2019-12-31 14:05:29
 */

class Storage {
  public static test = '222'
  constructor() {
    return this
  }

  setValue<T>(key: string, val: T) {
    const str = typeof (val) === 'object' ? JSON.stringify(val) : val
    localStorage.setItem(key, str as string)
  }

  getValue(key: string, type?: boolean) {
    const result = localStorage.getItem(key)
    if (type) {
      return JSON.parse(result)
    }
    return result
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }
}

export default Storage