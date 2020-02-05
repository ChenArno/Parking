import * as React from 'react'
import { Button, Result } from 'antd';

class NotFound extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist" extra={
      <Button type="primary" onClick={() => {
        this.props.history.push('/')
      }}>
        Back Home
      </Button>
    }></Result>
  }
}

export default NotFound
