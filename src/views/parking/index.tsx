import * as React from 'react'
// import { CommentInput } from '@/components/index.ts'

function Path<T>(path: T) {
  return function name(target: Function) {
    // console.log(target)
    // // const parking = new target()
    // console.log(path)
  }
}

@Path('/hello')
class Parking extends React.Component<any, any> {
  printContent(comment: any) {
    this.setState({ comment })
  }
  render() {
    return (
      <div>
        {/* <CommentInput onMit={this.printContent.bind(this)}></CommentInput> */}
      </div>
    )
  }
}

export default Parking
