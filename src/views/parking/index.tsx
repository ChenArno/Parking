import * as React from 'react'
import { Button } from 'antd'
import { login, logout } from '@/store/redux/login.ts'
import { connect } from 'react-redux'

function Path<T>(path: T) {
  return function name(target: Function) {
    // console.log(target)
    // // const parking = new target()
    // console.log(path)
  }
}

@Path('/hello')
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
        {/* {console.log(this.props.auth)} */}
        <h1>
          {this.props.auth.userName}
          {!this.props.auth.isAuth ? '未' : '已'}登录
        </h1>
      </div>
    )
  }
}
// 连接组件
const App = connect(state => state, { login, logout })(Parking)

export default App
