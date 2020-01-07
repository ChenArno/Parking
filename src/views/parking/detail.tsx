import * as React from 'react'
import { Comment } from '@/components/index.ts'

class Detial extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Comment title="车位管理详情">
        <div
          onClick={() => {
            this.props.history.goBack()
          }}
        >
          返回
        </div>
      </Comment>
    )
  }
}

export default Detial
