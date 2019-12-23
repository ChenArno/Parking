import * as React from 'react'
import { Button, Icon, Switch } from 'antd'

export default class Home extends React.Component {
  // state = {
  //   disabled: false
  // }
  // handleDisabledChange = (disabled: boolean) => {
  //   this.setState({ disabled })
  // }
  render() {
    // const { disabled } = this.state
    return (
      <div>
        {' '}
        <Icon type="link" />
        {/* <Switch
          size="small"
          checked={disabled}
          onChange={this.handleDisabledChange}
        /> */}
        <Switch defaultChecked={false} onChange={onChange} />
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

function onChange(checked: boolean) {
  console.log(`switch to ${checked}`)
}
