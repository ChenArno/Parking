import * as React from 'react'
import { Comment, FormCom, CommentTable } from '@/components/index.ts'

class User extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectObj: [
        {
          label: '用户名',
          value: 'userName'
        },
        {
          label: '姓名',
          value: 'ownerName'
        },
        {
          label: '联系电话',
          value: 'handphone'
        }
      ],
      dataSource: [],
      columns: [
        {
          title: '用户名',
          dataIndex: 'userName',
          key: 'userName'
        },
        {
          title: '姓名',
          dataIndex: 'ownerName',
          key: 'ownerName'
        },
        {
          title: '身份证',
          dataIndex: 'cardId',
          key: 'cardId'
        },
        {
          title: '联系电话',
          dataIndex: 'handphone',
          key: 'handphone'
        },
        {
          title: '联系邮箱',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address'
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
      <Comment title="用户管理">
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

export default User
