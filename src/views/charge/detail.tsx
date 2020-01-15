import * as React from 'react'

class Detail extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    console.log(this.props)
    return <div>详情</div>
  }
}

export default Detail
