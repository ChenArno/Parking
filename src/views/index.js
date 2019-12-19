import React, { Component } from 'react'
import List from '../list'
import { Button } from 'antd'

export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1> weclome {this.props.name} </h1> {/* <img src={background} /> */}{' '}
        {console.log('ccccccc')} <List />
        <Button
          type="primary"
          onClick={() => console.log('ssss')}
        >
          Primary
        </Button>
        <Button
          type="primary"
          onClick={() => this.props.history.push('detail')}
        >
          跳转
        </Button>
      </div>
    )
  }
}
