/*
import { message } from 'antd';
 * @Descripttion: 
 * @Author: chenArno
 * @Date: 2020-02-19 13:40:27
 * @LastEditors: chenArno
 * @LastEditTime: 2020-02-19 14:07:06
 */
const duration = 182
const play_url = 'http://okxxzy.xzokzyzy.com/20190806/23963_c6f8babb/寄生虫~1.mp4'

const sources = {
  ld: {
    bitrate: 2005,
    size: 46723282,
    duration,
    format: 'mp4',
    width: 320,
    height: 240,
    play_url,
  },
  hd: {
    bitrate: 2005,
    size: 46723282,
    duration,
    format: 'mp4',
    width: 320,
    height: 240,
    play_url,
  },
  sd: {
    bitrate: 900.49,
    size: 20633151,
    duration,
    format: 'mp4',
    width: 320,
    height: 240,
    play_url,
  },
}

const playProps = {
  id: 'zhihu2018',
  title: '2018 我们如何与世界相处？',
  cover: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018.jpg',
  duration,
  sources,
  error: { message: 'errorss' },
  src: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
}

export default playProps