import * as React from 'react'
import { Table } from 'antd'
import DateFormat from '@/utils/DateFormat.ts'

class CommentTable extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    let { dataSource, columns } = this.props
    dataSource = dataSource.map((item: any) => {
      item.createTime = DateFormat.formatDate(item.createTime)
      return item
    })
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
