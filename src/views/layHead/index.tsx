import * as React from 'react'
import { Layout, Avatar } from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { login, logout } from '@/store/redux/login.ts'
const { Header } = Layout

class LayHead extends React.Component<any, any> {
  spanElem = (isAuth: boolean, name: string) => {
    if (isAuth) {
      return (
        <div
          onClick={() => {
            this.props.logout()
          }}
        >
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            {name.slice(0, 1)}
          </Avatar>
        </div>
      )
    } else {
      return (
        <div
          style={{ marginRight: 5 }}
          onClick={() => {
            this.props.login()
          }}
        >
          请登录
        </div>
      )
    }
  }
  render() {
    const { isAuth, userName } = this.props.auth
    return (
      <Header className="head">
        <div className="head-title">和昌智能车位管理系统</div>
        <div className="head-user">
          {this.spanElem(isAuth, userName)}
          <span>退出</span>
        </div>
      </Header>
    )
  }
}
const App = connect(state => state, { login, logout })(LayHead)

export default App
