import * as React from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

class CommentInput extends React.Component<{ onMit?: any; form?: any }, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      userName: '',
      content: ''
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        // if (this.props.pnSubmit) {
        //   let { userName, content } = this.state
        //   this.props.onSubmit({ userName, content })
        // }
        this.setState({ content: '' })
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

// const wrapForm = Form.create()(CommentInput)

export default CommentInput
