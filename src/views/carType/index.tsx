import * as React from 'react'
import { Comment, FormCom, CommentTable } from '@/components/index.ts'

class Parking extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectObj: [
        {
          label: '车辆类型名称',
          value: 'carType'
        }
      ],
      dataSource: [],
      columns: [
        {
          title: '车辆类型名称',
          dataIndex: 'carType',
          key: 'carType'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          key: 'createTime'
        }
      ]
    }
  }
  onChange = (val: any) => {
    console.log(val)
  }
  render() {
    return (
      <Comment title="车辆类型管理">
        <FormCom
          selectObj={this.state.selectObj}
          onChange={this.onChange}
        ></FormCom>
        <CommentTable
          dataSource={this.state.dataSource}
          columns={this.state.columns}
        ></CommentTable>
      </Comment>
    )
  }
}

export default Parking
