import * as React from 'react'
import { Layout, Breadcrumb } from 'antd'
import './index.less'
// import store from '@/store/index.ts'
import { withRouter, RouteComponentProps } from 'react-router'
const { Content } = Layout

interface CommentProps extends RouteComponentProps {
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
          <Breadcrumb.Item>{this.props.title}</Breadcrumb.Item>
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
    let { children, location } = this.props
    // let { queryEvent } = store.getState() as any
    return Array.isArray(children) ? (
      children.map((child: any, i: number) => {
        return !child.props.path || location.pathname === child.props.path ? (
          <div className="cont-bottom" key={`key${i}`}>
            {child}
          </div>
        ) : (
          ''
        )
      })
    ) : (
      <div key="content">{children}</div>
    )
  }
}

export default withRouter(Comment)
