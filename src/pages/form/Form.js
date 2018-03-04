import React, { Component } from 'react';
import { Card, Form as AntForm, Input, Icon, Button, Select } from 'antd';

import {
  handleFormSubmit
} from './actions';
import tresto from './tresto.json';

const { Item: FormItem } = AntForm;
const { Option } = Select;

class Form extends Component {
  handleFormSubmit = handleFormSubmit.bind(this);

  render() {
    const style = {
      /**
       * This is called CSSinJS. This is a css-like style provider and
       * is written in a JavaScript object.
       */
      wrapper: {
        width: '300px',
      },
      button: {
        textAlign: 'center'
      }
    };

    const orderIcon = <Icon type="tag-o"/>;
    const userIcon = <Icon type="user"/>;
    const {
      form,

      isAddingOrder
    } = this.props;

    return (
      <Card style={style.wrapper}>
        <AntForm style={style.form} onSubmit={this.handleFormSubmit}>
          <FormItem>
            {
              /**
               * This is a utility function from Ant Design for forms. Check
               * the export line at the bottom of this file. Notice that we exported
               * this component (Form) by making it a parameter to a function returned
               * by `AntForm.create()`. This is where we got the `form` props where
               * we got the getFieldDecorator function.
               */
              form.getFieldDecorator('name@orderform', {
              rules: [{ required: true, message: 'Name is required.' }]
            })(<Input placeholder="Name" prefix={userIcon} />)}
          </FormItem>
          <FormItem>
            {form.getFieldDecorator('order@orderform', {
              rules: [{ required: true, message: 'Order is required.' }]
            })(
              <Select
                showSearch
                placeholder="Order"
                prefix={orderIcon}
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {tresto.menu.map(({ id, name }) => <Option value={name} key={id}>{name}</Option>)}
              </Select>
            )}
          </FormItem>
          <div style={style.button}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isAddingOrder}
            >Add Order to Queue</Button>
          </div>
        </AntForm>
      </Card>
    );
  }
}

export default AntForm.create()(Form);