/*
 * @Descripttion: 时间转换工具
 * @Author: chenArno
 * @Date: 2020-01-06 16:17:55
 * @LastEditors  : chenArno
 * @LastEditTime : 2020-01-07 14:15:58
 */

interface Option {
  [key: string]: any
}

class DateFormat {
  /**
   * 将日期格式化成指定格式的字符串
   * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
   * @param fmt 目标字符串格式，支持的字符有: y,M,d,q,w,H,h,m,s,默认格式yyyy-MM-dd HH:mm:ss
   * @returns 返回格式化后的日期字符串
   * **/
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

  /**
   * @name: parseDate
   * @test: 将字符串解析成日期
   * @msg: 
   * @param str 输入的日期字符串，如'2014-09-01 12:23:44'
   * @param fmt 字符串格式，默认'yyyy-MM-dd HH:mm:ss',支持如下 y、M、d、H、m、s、S,不支持w和q
   * @return: 解析后的Date类型日期
   */
  public static parseDate(str: string, fmt?: string): Date {
    fmt = fmt || 'yyyy-MM-dd HH:mm:ss'
    let options: Option = { y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0 }
    fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, (m: string, $1: string, $2: string, $3: string, $4: string, idx: string, old: string): string => {
      str = str.replace(new RegExp($1 + '(\\d{' + $2.length + '})' + $4), (_m: string, _$1: string): string => {
        options[$3] = parseInt(_$1)
        return '';
      })
      return ''
    })
    options.M-- // 月份是从0开始的，所以要减去1
    let date = new Date(options.y, options.M, options.d, options.H, options.m, options.s)
    if (options.S !== 0) {
      date.setMilliseconds(options.S)
    }
    return date
  }

  /**
   * @name: DateToFriendly
   * @test: 将一个日期格式化友好格式，比如1分钟以内返回刚刚
   * @msg: 
   * @param date Date
   * @return: 
   */
  public static DateToFriendly(date?: Date | number | string) {
    date = typeof date === 'string' ? this.parseDate(date) : date
    date = typeof date === 'number' ? new Date(date) : date
    date = date || new Date()
    let now = new Date()
    if ((now.getTime() - date.getTime()) < 60 * 1000) {
      return '刚刚'
    }
    let temp = this.formatDate(date, 'yyyy年M月d日')
    if (temp === this.formatDate(now, 'yyyy年M月d日')) {
      return this.formatDate(date, 'HH:mm')
    }
    if (date.getFullYear() === now.getFullYear()) {
      return this.formatDate(date, 'M月d日')
    }
    return temp
  }

  /**
   * @name: DurationToFriendly
   * @test: 将一段时长转换成友好格式
   * @msg: 147->'2分27秒' 1581->'26分21秒'
   * @param {number} second 
   * @param {string} fmt 格式  中文:秒，英文:s
   * @return: string 
   */
  public static DurationToFriendly(timer: number, fmt?: string): string {
    let second: string = fmt ? 's' : '秒'
    let minutes = fmt ? 'm' : '分'
    let hour = fmt ? 'h' : '时'
    let day = fmt ? 'd' : '天'
    if (timer < 60) {
      return timer + second
    } else if (timer < 60 * 60) {
      return (timer - timer % 60) / 60 + minutes + timer % 60 + second
    } else if (timer < 60 * 60 * 24) {
      return (timer - timer % 3600) / 3600 + hour + Math.round(timer % 3600 / 60) + minutes
    }
    return (timer / 60 / 60 / 24).toFixed(1) + day
  }
}

export default DateFormat