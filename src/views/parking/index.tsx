import * as React from 'react'
import { Button } from 'antd'
import { login } from '@/store/redux/login.ts'
import { connect } from 'react-redux'

class Parking extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            console.log(this.props.login())
          }}
        >
          login
        </Button>
      </div>
    )
  }
}
const App = connect(state => state, { login })(Parking)

export default App
