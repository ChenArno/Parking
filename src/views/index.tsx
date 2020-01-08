import * as React from 'react'
import { Progress } from 'antd'
import './index.less'
import { Comment } from '@/components/index.ts'

interface HomeState {
  disabled?: boolean
}
// let screenHeight =
//   window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight

export default class Home extends React.Component<any, HomeState> {
  state = {
    disabled: false
  }
  handleDisabledChange = (disabled: boolean) => {
    this.setState({ disabled })
    console.log(`${disabled}`)
  }
  render() {
    return (
      <Comment title="首页">
        <div className="home">
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={75} />
        </div>
      </Comment>
    )
  }
}
