import * as React from 'react'
import { Layout } from 'antd'
import { Button, Icon, Switch } from 'antd'
import './index.less'
import LayHead from '@/views/layHead/index.tsx'
import MenuView from '@/views/menu/index.tsx'
import { TestCom } from '@/components/index.tsx'
const { Content } = Layout

interface HomeState {
  disabled?: boolean
}

export default class Home extends React.Component<any, HomeState> {
  state = {
    disabled: false
  }
  handleDisabledChange = (disabled: boolean) => {
    this.setState({ disabled })
    console.log(`${disabled}`)
  }
  render() {
    const { disabled } = this.state
    const Template = (params: any) => {
      return <div>{params.name}</div>
    }
    return (
      <div className="cont">
        <Layout className="lay-cont">
          <LayHead />
          <Layout>
            <MenuView name="sss" />
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
              <TestCom template={Template}></TestCom>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
