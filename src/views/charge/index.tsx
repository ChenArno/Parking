import * as React from 'react'
import { Comment } from '@/components/index.ts'
import { Route } from 'react-router-dom'
import table from './table.tsx'
import detail from './detail.tsx'

class Charge extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return <Comment title="收费管理">
      <Route path={`${this.props.match.path}/table`} component={table}></Route>
      <Route path={`${this.props.match.path}/detail`} component={detail}></Route>
    </Comment>
  }

  componentDidMount() {
    // console.log(this.props.match)
  }
}

export default Charge
