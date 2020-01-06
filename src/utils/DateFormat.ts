/*
 * @Descripttion: 时间转换工具
 * @version:
 * @Author: chenArno
 * @Date: 2020-01-06 16:17:55
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-06 17:14:45
 */

/**
 * 将日期格式化成指定格式的字符串
 * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
 * @param fmt 目标字符串格式，支持的字符有: y,M,d,q,w,H,h,m,s,默认格式yyyy-MM-dd HH:mm:ss
 * @returns 返回格式化后的日期字符串
 * **/

interface Option {
  [key: string]: any
}
class DateFormat {
  public static formatDate<T>(date?: T | Date, fmt?: string | undefined) {
    date = date === undefined ? new Date() : date
    let str: Date = typeof date === 'number' ? new Date(date) : date as Date
    fmt = fmt || 'yyyy-MM-dd HH:mm:ss'
    let options: Option = {
      'y': str.getFullYear(),
      'M': str.getMonth() + 1,
      'd': str.getDate(),
      'q': Math.floor((str.getMonth() + 3) / 3),// 季度
      'w': str.getDay(), // 星期，0-6
      'H': str.getHours(),
      'h': str.getHours() % 12 === 0 ? 12 : str.getHours() % 12, // 12小时制
      'm': str.getMinutes(),
      's': str.getSeconds(),
      'S': str.getMilliseconds()
    }
    let week: Array<string> = ['天', '一', '二', '三', '四', '五', '六']
    for (let i in options) {
      fmt = fmt.replace(new RegExp(i + '+', 'g'), (m: string): string => {
        let val: string = options[i] + ''
        if (i === 'w') return (m.length > 2) ? '星期' : '周' + week[val as any]
        for (let j = 0, len = val.length; j < m.length - len; j++) {
          val = '0' + val
        }
        return m.length === 1 ? val : val.substring(val.length - m.length)
      })
    }
    return fmt
  }
}

export default DateFormat