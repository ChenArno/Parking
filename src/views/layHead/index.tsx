import * as React from 'react'
import { Layout } from 'antd'
import './index.less'
const { Header } = Layout

class LayHead extends React.Component<any, any> {
  render() {
    return (
      <Header className="head">
        <div>和昌智能车位管理系统</div>
      </Header>
    )
  }
}

export default LayHead
