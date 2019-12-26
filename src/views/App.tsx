import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'
import LayHead from '@/views/layHead/index.tsx'
import MenuView from '@/views/menu/index.tsx'
import BasicRoute from '@/routes/index.tsx'
const { Content } = Layout

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="cont">
        <BrowserRouter>
          <Layout className="lay-cont">
            <LayHead />
            <Layout>
              <MenuView name="sss" />
              <Content>
                <BasicRoute />
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
