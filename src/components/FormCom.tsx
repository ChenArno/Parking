import * as React from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

class FormCom extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    let { msg } = this.props
    console.log(msg)
  }
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        // console.log(`values:${values}`)
        return
      }
      console.log(err)
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(<Input placeholder="Username" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(<Input placeholder="Password" />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappForm = Form.create({ name: 'FormCom ' })(FormCom)
export default WrappForm
