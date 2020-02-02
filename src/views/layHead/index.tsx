import * as React from 'react'
import { Layout, Avatar, Modal } from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { login, logout } from '@/store/redux/login.ts'
const { Header } = Layout
const { confirm } = Modal

class LayHead extends React.Component<any, any> {
  spanElem = (isAuth: boolean, name: string) => {
    if (isAuth) {
      return (
        <div
          onClick={() => {
            showConfirm(this.props.logout)
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
        <div className="head-title">某智能车位管理系统</div>
        <div className="head-user">
          {this.spanElem(isAuth, userName)}
          <span>退出</span>
        </div>
      </Header>
    )
  }
}

function showConfirm(logout: Function) {
  confirm({
    title: '提示',
    content: '确定要登出界面吗?',
    onOk() {
      // return new Promise((resolve, reject) => {
      //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
      // }).catch(() => console.log('Oops errors!'))
      logout()
    },
    okText: '确定',
    cancelText: '取消'
  })
}
const App = connect(state => state, { login, logout })(LayHead)

export default App
