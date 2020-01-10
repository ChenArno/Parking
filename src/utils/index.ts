/*
 * @Descripttion: 工具类
 * @Author: chenArno
 * @Date: 2020-01-10 10:38:21
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-10 15:12:26
 */

class Utils {
  // 生成hash序列的方法
  public static createHash(hashLength: number): string {
    // 默认长度 24
    return Array.from(Array(Number(hashLength) || 24), () => Math.floor(Math.random() * 36).toString(36)).join('');
  }

  // 节流函数 节流函数利用闭包来设置定时器，节流函数3s内只能点击一次，点击后立即触发，重复点击无效，必须等3s之后才能点击第二次
  public static throttle(fn: Function, delay: number = 3000) {
    let preTime = Date.now()
    return (event: any) => {
      const context = this
      event.persist?.() // 保留对事件的引用
      let doTime = Date.now()
      if (doTime - preTime >= delay) {
        fn.apply(context)
        preTime = Date.now()
      }
    }
  }

  // 防抖函数3s之后出结果，重复点击无效，如果重复点击了，重新计算3s时间，从点击的时刻算起，必须等待3s时间触发事件
  public static debounce(fn: Function, wait: number = 3000) {
    let timeout: any;// 定时器变量
    return (event: any) => {
      clearTimeout(timeout) // 每次触发时先清楚上一次的定时器，然后重新计时
      event.persist?.() // 保留对事件的引用
      timeout = setTimeout(() => {
        fn(event)
      }, wait)
    }
  }
}

export default Utils
