import * as React from 'react'
import { Button } from 'antd'
import { login, logout } from '@/store/redux/login.ts'
import { connect } from 'react-redux'

class Parking extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.props.login()
          }}
        >
          login
        </Button>
        <Button
          onClick={() => {
            this.props.logout()
          }}
        >
          logout
        </Button>
        {console.log(this.props.auth)}
        <h1>
          {this.props.auth.userName}
          {!this.props.auth.isAuth ? '未' : '已'}登录
        </h1>
      </div>
    )
  }
}
const App = connect(state => state, { login, logout })(Parking)

export default App
