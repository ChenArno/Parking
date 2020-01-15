import * as React from 'react'
import { Progress } from 'antd'
import './index.less'
import { Comment, ChartsLine } from '@/components/index.ts'

interface HomeState {
  disabled?: boolean
  left?: Array<Array<number>>
  right?: Array<Array<number>>
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
      left: [
        [12, 5],
        [24, 20],
        [36, 36],
        [48, 10],
        [60, 10],
        [72, 20]
      ],
      right: []
    }
  }

  handleDisabledChange = (disabled: boolean) => {
    this.setState({ disabled })
  }
  componentDidMount() {}
  render() {
    let option1 = this.getOption(this.state.left)
    let option2 = this.getOption(this.state.right)
    return (
      <Comment title="首页">
        <div className="span-title">监测</div>
        <div className="home">
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={75} />
        </div>
        <div className="span-title">曲线图</div>
        <div className="home chart">
          <ChartsLine option={option1} />
          <ChartsLine option={option2} />
        </div>
      </Comment>
    )
  }

  getOption(data: Array<any>) {
    return {
      grid: {
        top: '20%',
        left: '0',
        bottom: '0%',
        containLabel: true
      },
      tooltip: {},
      xAxis: {},
      yAxis: {},
      series: [
        {
          type: 'line',
          smooth: true,
          data
        }
      ]
    }
  }
}
