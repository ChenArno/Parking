import * as React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { Button } from 'antd'

class Charge extends React.Component<any, any> {
  render() {
    const { PayIncrease, PayDecrease, tiger }: any = this.props
    return (
      <div>
        <h2>当月工资为{tiger}</h2>
        <Button onClick={PayIncrease}>升职</Button>
        <Button onClick={PayDecrease}>降职</Button>
      </div>
    )
  }
}

const tiger = 10000

// action
const increase = {
  type: '涨工资'
}

const decrease = {
  type: '扣工资'
}
// reducer
const reducer = (state: number = tiger, action: any) => {
  switch (action.type) {
    case '涨工资':
      return (state += 100)
    case '扣工资':
      return (state -= 100)
    default:
      return state
  }
}

// 创建store

const store = createStore(reducer)
function mapStateToProps<T>(state: T) {
  return { tiger: state }
}
function mapDispatchToProps(dispatch: any) {
  return {
    PayIncrease: () => dispatch(increase),
    PayDecrease: () => dispatch(decrease)
  }
}
// 连接组件
const App = connect(mapStateToProps, mapDispatchToProps)(Charge)
const reslut = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
export default reslut
