import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom' // 解决子组件获取不到history withRouter
const { Sider } = Layout
import getMenuConfig, { MenuList } from './config.ts'
import { selectMenu } from '@/store/redux/formData.ts'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// withRouter 路由跳转
interface MenuViewState {
  collapsed?: boolean
  menus?: Array<any>
}

class MenuView extends React.Component<any, MenuViewState> {
  constructor(props: any) {
    super(props)
  }
  state: any = {
    collapsed: false,
    menus: Array
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  renderMenu = ({ id, icon, label, path }: MenuList) => {
    return (
      <Menu.Item
        key={id}
        onClick={() => {
          this.props.selectMenu(path)
        }}
      >
        <Link to={path}>
          <Icon type={icon} />
          <span>{label}</span>
        </Link>
      </Menu.Item>
    )
  }

  componentDidMount() {
    this.renderItems()
    this.props.history.push(this.props.queryEvent.path)
  }

  renderItems = async () => {
    try {
      let res: any = await getMenuConfig()
      this.setState({
        menus: res.map((v: MenuList) => {
          return this.renderMenu(v)
        })
      })
    } catch (err) {
      throw new Error(err)
    }
  }
  render() {
    return (
      <Sider
        // style={{ minHeight: '100vh' }}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.toggleCollapsed}
      >
        {/* {console.log(this.props)} */}
        <Menu defaultSelectedKeys={[this.props.queryEvent.path]} mode="inline">
          {this.state.menus}
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(connect(state => state, { selectMenu })(MenuView))
