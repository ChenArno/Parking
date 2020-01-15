import * as React from 'react'
import { Comment } from '@/components/index.ts'
import { Route, Switch } from 'react-router-dom'
// import table from './table.tsx'
// import detail from './detail.tsx'

// const InBox = ({ match }: any) => {
//   console.log(match)
//   return <Route path={`${match.url}/detail`} component={detail} />
// }

class Charge extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    console.log(this.props)

    return (
      <Comment title="收费管理">
        <Switch>
          {/* <Redirect from="/charge" to="/charge/page1" exact></Redirect> */}
          <Route path="page1" exact component={() => <div>about-page-1</div>} />
          <Route path="page2" exact component={() => <div>about-page-2</div>} />
        </Switch>
      </Comment>
    )
  }
}

export default Charge
