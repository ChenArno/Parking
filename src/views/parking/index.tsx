import * as React from 'react'
import { Comment, FormCom, CommentTable } from '@/components/index.ts'

function Path<T>(path: T) {
  return function name(target: Function) {
    // console.log(target)
    // // const parking = new target()
    // console.log(path)
  }
}

@Path('/hello')
class Parking extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectObj: [
        {
          label: '车位号',
          value: 'NO'
        },
        {
          label: '业主',
          value: 'owner'
        }
      ],
      dataSource: [],
      columns: [
        {
          title: '车位号',
          dataIndex: 'NO',
          key: 'NO'
        },
        {
          title: '业主',
          dataIndex: 'owner',
          key: 'owner'
        },
        {
          title: '车辆类型',
          dataIndex: 'carType',
          key: 'carType'
        },
        {
          title: '联系电话',
          dataIndex: 'handphone',
          key: 'handphone'
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
      <Comment title="车位管理">
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
