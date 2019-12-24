import * as React from 'react'

// 第一个any是 props 的类型，第二个any是 state 的类型。
class ListItem extends React.Component<any, { hoverIndex?: number }> {
  private nums: Array<number> = [1, 2, 3, 4, 5, 6]
  render() {
    return this.nums.map((v: number) => {
      return <li key={v}> {v} </li>
    })
  }
}

class ListElem extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      nowDate: new Date()
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>
        <ul>
          <ListItem />
        </ul>{' '}
        <div> {this.state.nowDate.toLocaleTimeString()} </div>{' '}
      </div>
    )
  }
}

export default ListElem
