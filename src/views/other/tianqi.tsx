import * as React from 'react'
import axios from 'axios'
import * as echarts from 'echarts'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china'
import Utils from '@/utils/index.ts'

class Tianqi extends React.Component<any, any>{
  myChart: any
  render() {
    return <div style={{ width: '100%', height: '100%' }} id="map"></div>
  }

  componentDidMount() {
    this.getApi()
    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener('resize', Utils.throttle(this.resize, 100))
  }
  componentWillUnmount() {
    this.dispose()
  }
  // componentWillReceiveProps(nextProps: any) {
  //   // 更新图表
  //   this.createMap(data)
  // }
  resize = () => {
    this.myChart?.resize()
  }
  dispose() {
    if (!this.myChart) return
    this.myChart.dispose()
    this.myChart = null
  }
  createMap = (data: any) => {
    let arrData = data.area.map((r: any) => {
      return {
        name: r.provinceName,
        value: r.confirmedCount
      }
    })
    this.myChart = (echarts as any).init(document.getElementById('map'))
    const option = {
      tooltip: {
        trigger: 'item',
      },
      visualMap: {
        // 第二个 visualMap 组件
        type: 'piecewise', // 定义为分段型 visualMap
        orient: 'horizontal',
        pieces: [{ gte: 1, lte: 9 }, { gte: 10, lte: 99 }, { gte: 100, lte: 499 }, { gte: 500, lte: 1000 }, { gt: 1000 }],
        // min: 0,
        // max: data.diagnosed,
        text: ['高', '低'], // 文本，默认为数值文本
        splitNumber: 0,
        color: ['#e83132', '#ec9217'],
      },
      series: [
        {
          name: '2020感染人数',
          type: 'map',
          mapType: 'china',
          mapLocation: {
            x: 'left',
          },
          // selectedMode: 'multiple',
          itemStyle: {
            normal: { label: { show: true, color: '#333' }, borderWidth: 0 },
            // emphasis: { label: { show: true } },
            // borderWidth: 0,
            // borderColor: '#eee',
          },
          data: arrData,
        },
      ],
      animation: false,
    }
    this.myChart.setOption(option)
  }

  getApi() {
    axios.get(' https://www.tianqiapi.com/api?version=epidemic&appid=23035354&appsecret=8YvlPNrz').then((res: any) => {
      // console.log(res.data.data)
      this.createMap(res.data.data)
    })
  }
}

export default Tianqi