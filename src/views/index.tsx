import * as React from 'react'
import { Layout } from 'antd'
import { Button, Icon, Switch } from 'antd'
import './index.less'
import HeadView from '@/views/HeadView/index.tsx'
import MenuView from '@/views/menu/index.tsx'
const { Sider, Content } = Layout

export default class Home extends React.Component<any, any> {
  state = {
    disabled: false
  }
  handleDisabledChange = (disabled: boolean) => {
    this.setState({ disabled })
    console.log(`${disabled}`)
  }
  render() {
    const { disabled } = this.state
    return (
      <div className="cont">
        <Layout className="lay-cont">
          <HeadView />
          <Layout>
            <Sider>
              <MenuView />
            </Sider>
            <Content>
              <Icon type="link" />
              <Switch
                size="small"
                checked={disabled}
                onChange={this.handleDisabledChange}
              />
              home
              <Button type="primary" onClick={() => console.log('ssss')}>
                Primary
              </Button>
              <Button
                type="primary"
                onClick={() => this.props.history.push('detail')}
              >
                跳转
              </Button>{' '}
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
