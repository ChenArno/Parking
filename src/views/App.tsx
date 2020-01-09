import * as React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'
import LayHead from '@/views/layHead/index.tsx'
import MenuView from '@/views/menu/index.tsx'
import BasicRoute from '@/routes/index.tsx'
import '@/components/echarts/theme.js'
const { Content } = Layout

// BrowserRouter 配置需要服务端配置
class App extends React.Component<any, any> {
  render() {
    return (
      <div className="cont">
        <Router>
          <Layout className="lay-cont">
            <LayHead />
            <Layout>
              <MenuView />
              <Content>
                <BasicRoute />
              </Content>
            </Layout>
            {/* <Footer className="footer">jj</Footer> */}
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App
