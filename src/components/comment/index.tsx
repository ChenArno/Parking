import * as React from 'react'
import { Layout, Breadcrumb } from 'antd'
import './index.less'
const { Content } = Layout

interface CommentProps {
  title?: String
}

class Comment extends React.Component<CommentProps, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
    this.renderChild = this.renderChild.bind(this)
  }
  render() {
    return (
      <Layout className="comment">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>车位管理</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0
          }}
        >
          {this.renderChild()}
        </Content>
      </Layout>
    )
  }

  renderChild() {
    let { children } = this.props
    return Array.isArray(children) ? (
      children.map((child: any, i: number) => (
        <div key={`key${i}`}>{child}</div>
      ))
    ) : (
      <div key="content">{children}</div>
    )
  }
}

export default Comment
