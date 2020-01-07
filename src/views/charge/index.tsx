import * as React from 'react'
import { Comment, FormCom, CommentTable } from '@/components/index.ts'

class Charge extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectObj: [
        {
          label: '车牌号',
          value: 'plateNO'
        },
        {
          label: '车位号',
          value: 'NO'
        }
      ],
      dataSource: [],
      columns: [
        {
          title: '车牌号',
          dataIndex: 'plateNO',
          key: 'plateNO'
        },
        {
          title: '车辆类型',
          dataIndex: 'vetype',
          key: 'vetype'
        },
        {
          title: '车位号',
          dataIndex: 'NO',
          key: 'NO'
        },
        {
          title: '停车开始时间',
          dataIndex: 'benginTime',
          key: 'benginTime'
        },
        {
          title: '停车结束时间',
          dataIndex: 'endTime',
          key: 'endTime'
        },
        {
          title: '停车时长',
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: '费用',
          dataIndex: 'cost',
          key: 'cost'
        }
      ]
    }
  }
  onChange = (val: any) => {
    console.log(val)
  }
  render() {
    return (
      <Comment title="收费管理">
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

export default Charge
