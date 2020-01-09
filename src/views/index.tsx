import * as React from 'react'
import { Progress } from 'antd'
import './index.less'
import { Comment, ChartsLine } from '@/components/index.ts'

interface HomeState {
  disabled?: boolean
  option?: Object
}
// let screenHeight =
//   window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight
// implements 实现
export default class Home extends React.Component<any, HomeState> {
  constructor(props: any) {
    super(props)
    this.state = {
      disabled: false,
      option: {
        title: { text: 'Line' },
        tooltip: {},
        toolbox: {
          feature: {
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            },
            restore: {}
          }
        },
        xAxis: {},
        yAxis: {},
        series: [
          {
            type: 'line',
            smooth: true,
            data: [
              [12, 5],
              [24, 20],
              [36, 36],
              [48, 10],
              [60, 10],
              [72, 20]
            ]
          }
        ]
      }
    }
  }

  handleDisabledChange = (disabled: boolean) => {
    this.setState({ disabled })
    console.log(`${disabled}`)
  }
  componentDidMount() {}
  render() {
    return (
      <Comment title="首页">
        <div className="span-title">监测</div>
        <div className="home">
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={75} />
        </div>
        <div className="span-title">曲线图</div>
        <div className="home">
          <ChartsLine option={this.state.option} />
        </div>
      </Comment>
    )
  }
}
