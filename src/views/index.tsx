import * as React from 'react'
import { Button, Icon, Switch } from 'antd'

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
      <div>
        {' '}
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
        {/* <Button
          type="primary"
          onClick={() => this.props.history.push('detail')}
        >
          跳转
        </Button>{' '} */}
      </div>
    )
  }
}
