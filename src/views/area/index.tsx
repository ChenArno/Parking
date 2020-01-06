import * as React from 'react'
import { Comment, FormCom, CommentTable } from '@/components/index.ts'

class Area extends React.Component<any, any> {
  // 获取子组件的ref对象
  private formRef?: any
  getChildVal = (val: any) => {
    console.log(val)
  }
  constructor(props: any) {
    super(props)
    this.state = {
      selectObj: [
        {
          label: '车位号',
          value: 'NO'
        },
        {
          label: '停车楼层',
          value: 'floor'
        }
      ],
      dataSource: [
        {
          NO: '1',
          floor: '2层',
          rent: 200,
          lease: '1年',
          createTime: 1472793615764
        },
        {
          NO: '2',
          floor: '1层',
          rent: 200,
          lease: '1年',
          createTime: 1472793615764
        }
      ],
      columns: [
        {
          title: '车位号',
          dataIndex: 'NO',
          key: 'NO'
        },
        {
          title: '停车楼层',
          dataIndex: 'floor',
          key: 'floor'
        },
        {
          title: '租金(元)',
          dataIndex: 'rent',
          key: 'rent'
        },
        {
          title: '租期',
          dataIndex: 'lease',
          key: 'lease'
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
      <Comment>
        <FormCom
          selectObj={this.state.selectObj}
          onChange={this.onChange}
          wrappedComponentRef={(form: any) => (this.formRef = form)}
        ></FormCom>
        <CommentTable
          dataSource={this.state.dataSource}
          columns={this.state.columns}
        ></CommentTable>
      </Comment>
    )
  }

  componentDidMount() {
    console.log(this.formRef)
  }
  // 代替componentWillReceiveProps
  // static getDerivedStateFromProps(nextProps: any, prevState: any) {
  //   if (nextProps.isLogin !== prevState.isLogin) {
  //     return {
  //       isLogin: nextProps.isLogin
  //     }
  //   }
  //   return null
  // }
  // handleClose() {
  //   console.log('handleClose')
  // }

  // componentDidUpdate(prevProps: any, prevState: any) {
  //   if (!prevState.isLogin && this.props.isLogin) {
  //     this.handleClose()
  //   }
  // }

  // 代替componentWillUpdate
  // 常见的 componentWillUpdate 的用例是在组件更新前，
  // 读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。
  // getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
  //   console.log(prevProps)
  //   console.log(prevState)
  // }
}

export default Area
