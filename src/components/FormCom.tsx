import * as React from 'react'
import { Form, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
const FormItem = Form.Item

interface SelectOption {
  label: string
  value: string
}

// form.create props需要继承FormComponentProps
interface FormProps extends FormComponentProps {
  selectObj: Array<SelectOption>
  onChange?: Function
}
class FormCom extends React.Component<FormProps, any> {
  constructor(props: FormProps) {
    super(props)
  }
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: Error, values: any) => {
      if (!err) {
        // console.log(`values:${values}`)
        this.props.onChange(values)
        return
      }
      console.log(err)
    })
  }

  renderElm = () => {
    // const { getFieldDecorator } = this.props.form
    let { selectObj } = this.props
    console.log(selectObj)
    return selectObj.map((item: SelectOption, i: number) => {
      return (
        <FormItem key={i}>
          <Input placeholder={item.label} />
          {/* {getFieldDecorator(item.value, {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input placeholder={item.label} />)} */}
        </FormItem>
      )
    })
  }
  render() {
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          {this.renderElm()}
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
