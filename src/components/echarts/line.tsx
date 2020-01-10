import * as React from 'react'
// 引入echarts主模块
import * as echarts from 'echarts'
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import Utils from '@/utils/index.ts'

interface LineProps {
  option: Object
}
interface LineState {
  id: string
}
class ChartsLine extends React.Component<LineProps, LineState> {
  private myChart: any = null
  constructor(props: LineProps) {
    super(props)
    this.state = {
      id: `main_${Utils.createHash(5)}`
    }
  }
  componentDidMount() {
    // 初始化图表
    this.initChart()
    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener('resize', Utils.throttle(this.resize, 100))
  }

  componentWillReceiveProps(nextProps: LineProps) {
    // 更新图表
    this.initChart(nextProps)
  }
  componentWillUnmount() {
    this.dispose()
  }

  initChart(props?: LineProps) {
    let option = props === undefined ? this.props.option : props.option
    this.myChart = (echarts as any).getInstanceByDom(
      document.getElementById(this.state.id)
    )
    if (this.myChart === undefined) {
      this.myChart = (echarts as any).init(
        document.getElementById(this.state.id),
        'essos'
      )
    }
    // 绘制图表
    this.myChart.setOption(option)
  }

  dispose() {
    if (!this.myChart) return
    this.myChart.dispose()
    this.myChart = null
  }
  resize = () => {
    this.myChart?.resize()
  }
  render() {
    return (
      <div id={this.state.id} style={{ width: '80%', height: '100%' }}></div>
    )
  }
}

export default ChartsLine
