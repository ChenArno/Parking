import * as React from 'react'
import { FormCom, CommentTable } from '@/components/index.ts'
import DateFormat from '@/utils/DateFormat.ts'

class Table extends React.Component<any, any> {
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
      dataSource: [
        {
          plateNO: '浙A872Jl',
          vetype: '小汽车',
          NO: 583,
          benginTime: 1472793615764,
          endTime: 1472793665764,
          time: 324242,
          cost: 190
        }
      ],
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
        },
        {
          title: 'Action',
          key: 'action',
          render: (text: any, record: any) => (
            <span
              onClick={() => {
                // this.props.history.push({
                //   pathname: `/charge/detail`,
                //   state: { data: text }
                // })
                this.props.history.push('/charge/detail')
                console.log(text.NO)
              }}
            >
              Action
            </span>
          )
        }
      ]
    }
  }
  onChange = (val: any) => {
    console.log(val)
  }
  render() {
    return (
      <div>
        <FormCom
          selectObj={this.state.selectObj}
          onChange={this.onChange}
        ></FormCom>
        <CommentTable
          dataSource={this.state.dataSource}
          columns={this.state.columns}
        ></CommentTable>
      </div>
    )
  }

  componentDidMount() {
    let { dataSource } = this.state
    this.setState({
      dataSource: dataSource.map((item: any) => {
        item.benginTime = item.benginTime
          ? DateFormat.formatDate(item.benginTime)
          : '--'
        item.endTime = item.endTime ? DateFormat.formatDate(item.endTime) : '--'
        item.time = item.time ? DateFormat.DurationToFriendly(item.time) : '--'
        return item
      })
    })
  }
}

export default Table
