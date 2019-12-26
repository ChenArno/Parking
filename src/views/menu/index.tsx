import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter, Link } from 'react-router-dom' // 解决子组件获取不到history
const { Sider } = Layout

interface MenuViewState {
  collapsed?: boolean
}
// interface MenuViewProps {}

class MenuView extends React.Component<any, MenuViewState> {
  constructor(props: any) {
    super(props)
  }
  state = {
    collapsed: false
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Sider
        style={{ minHeight: '100vh' }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.toggleCollapsed}
      >
        {console.log(this.props)}
        <Menu defaultSelectedKeys={['3']} mode="inline" theme="dark">
          <Menu.Item key="1">
            <Link to="/pages/parking">
              <Icon type="desktop" />
              <span>车位管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="inbox" />
            <span>车辆区域</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>收费管理</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="pie-chart" />
            <span>用户管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(MenuView)
