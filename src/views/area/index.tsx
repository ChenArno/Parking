import * as React from 'react'
import { Comment } from '@/components/index.tsx'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

function hasErrors(fieldsError: any) {
  console.log(fieldsError)
  return Object.keys(fieldsError).some((field: any) => fieldsError[field])
}
class Area extends React.Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        console.log(`values:${values}`)
      }
    })
  }
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    }: any = this.props.form
    const userNameError =
      isFieldTouched('userName') && getFieldError('userName')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')
    return (
      <Comment>
        {/* <div title="gggg">sjj</div> */}
        <div>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={userNameError ? 'error' : ''}
              help={userNameError || ''}
            >
              {getFieldDecorator('userName', {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(<Input placeholder="Username" />)}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(<Input placeholder="Password" />)}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                确定
              </Button>
            </FormItem>
          </Form>
        </div>
      </Comment>
    )
  }
}
const WrappForm = Form.create()(Area)
export default WrappForm
