import * as React from 'react'
import { Table } from 'antd'

class CommentTable extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    let { dataSource, columns } = this.props
    return (
      <Table
        rowKey={(record: any) => record.NO}
        dataSource={dataSource}
        columns={columns}
      />
    )
  }
}

export default CommentTable
