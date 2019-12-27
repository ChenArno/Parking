import * as React from 'react'
import { Layout, Avatar } from 'antd'
import './index.less'
const { Header } = Layout

class LayHead extends React.Component<any, any> {
  render() {
    return (
      <Header className="head">
        <div className="head-title">和昌智能车位管理系统</div>
        <div className="head-user">
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            U
          </Avatar>
          <span>退出</span>
        </div>
      </Header>
    )
  }
}

export default LayHead
