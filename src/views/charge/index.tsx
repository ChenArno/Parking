import * as React from 'react'
import { Comment } from '@/components/index.ts'

class Charge extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return <Comment title="收费管理">{this.props.children}</Comment>
  }
}

export default Charge
