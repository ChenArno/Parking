import * as React from 'react'
// 引入echarts主模块
import * as echarts from 'echarts'
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
// const theme = require('./theme.ts')
import './theme.js'

interface LineProps {
  option: Object
}
interface LineState {}
class ChartsLine extends React.Component<LineProps, LineState> {
  constructor(props: LineProps) {
    super(props)
  }
  componentDidMount() {
    // 初始化图表
    this.initChart()
  }

  componentWillReceiveProps(nextProps: LineProps) {
    // 更新图表
    this.initChart(nextProps)
  }

  initChart(props?: LineProps) {
    // console.log(theme)
    let option = props === undefined ? this.props.option : props.option
    let myChart = (echarts as any).getInstanceByDom(
      document.getElementById('main')
    )
    if (myChart === undefined) {
      myChart = (echarts as any).init(document.getElementById('main'), 'essos')
    }
    // 绘制图表
    myChart.setOption(option)
  }

  render() {
    return <div id="main" style={{ width: 600, height: 300 }}></div>
  }
}

export default ChartsLine
