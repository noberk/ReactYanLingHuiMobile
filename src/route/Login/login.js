import React, { Component } from 'react';
import './login.less';

import { Header } from "../../components";

import { Form ,Input } from "antd";
// import "antd/lib/input/style/index.less";
// import "antd/lib/Form/style/index.css";

const FormItem = Form.Item;

 class Login extends Component {

    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Header />
                <header className="loginArea">
                    <div>账号登录</div>
                    
                </header>
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
                {/* <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>账号</label>
                        <input type="text" placeholder="会员名/手机号" />
                    </div>
                    <div class="mui-input-row">
                        <label>密码</label>
                        <input type="text" class="mui-input-clear" placeholder="密码" />
                    </div>
                    <div class="forgotPassword">
                        <a href="./passwordFind.html">忘记密码</a>
                    </div>

                    <div class="mui-button-row">
                        <button type="button" style="width:50%;background:#29bb9c;border: 1px solid #29bb9c" class="mui-btn mui-btn-success" onclick="return false;">立即登录</button>&nbsp;&nbsp;
        </div>
                </form> */}

            </div>
        );
    }
}


 const WrappedRegistrationForm = Form.create()(Login);
 export default WrappedRegistrationForm;


