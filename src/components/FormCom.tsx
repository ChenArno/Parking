import * as React from 'react'
import { Form, Input, Button } from 'antd'
import { query } from '@/store/redux/formData.ts'
import { connect } from 'react-redux'
const FormItem = Form.Item

class FormCom extends React.Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        // console.log(`values:${values}`)
        this.props.query(values)
        return
      }
      console.log(err)
    })
  }
  render() {
    const { getFieldDecorator }: any = this.props.form
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input placeholder="Username" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(<Input placeholder="Password" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WrappForm = Form.create()(FormCom)
const App = connect(state => state, { query })(WrappForm)
export default App
