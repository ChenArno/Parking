import * as React from 'react'

class TestCom extends React.Component<any, any> {
  render() {
    return <div>{this.props.template({ name: 'dell' })}</div>
  }
}

export default TestCom
