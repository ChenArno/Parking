import * as React from 'react'
import { Comment, FormCom } from '@/components/index.tsx'
import { connect } from 'react-redux'
import { query } from '@/store/redux/formData.ts'

class Area extends React.Component<any, any> {
  render() {
    {
      console.log(this.props)
    }
    return (
      <Comment>
        <FormCom></FormCom>
      </Comment>
    )
  }

  // 代替componentWillReceiveProps
  // static getDerivedStateFromProps(nextProps: any, prevState: any) {
  //   if (nextProps.isLogin !== prevState.isLogin) {
  //     return {
  //       isLogin: nextProps.isLogin
  //     }
  //   }
  //   return null
  // }
  // handleClose() {
  //   console.log('handleClose')
  // }

  // componentDidUpdate(prevProps: any, prevState: any) {
  //   if (!prevState.isLogin && this.props.isLogin) {
  //     this.handleClose()
  //   }
  // }

  // 代替componentWillUpdate
  // 常见的 componentWillUpdate 的用例是在组件更新前，
  // 读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。
  // getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
  //   console.log(prevProps)
  //   console.log(prevState)
  // }
}
const FormElm = connect(state => state, { query })(Area)

export default FormElm
