import * as React from 'react'
import { Form, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item

// form.create props需要继承FormComponentProps
interface FormProps extends FormComponentProps {
  msg?: string
}
class FormCom extends React.Component<FormProps, any> {
  constructor(props: FormProps) {
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

export default Form.create<FormProps>({ name: 'FormCom ' })(FormCom)
