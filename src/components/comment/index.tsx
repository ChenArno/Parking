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
          {Array.isArray(this.props.children)
            ? this.props.children.map((child: any) => this.renderChild(child))
            : this.props.children && this.renderChild(this.props.children)}
        </Content>
      </Layout>
    )
  }

  renderChild(child: any) {
    if (child.props.title) {
      return <div key="title">{child}</div>
    }
    return <div key="content">{child}</div>
  }
}

export default Comment
