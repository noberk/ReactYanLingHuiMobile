import React, { Component } from 'react';
import './login.less';


export default class Login extends Component {

    render() {
        return (
            <div>
                <header className="loginArea">
                    <div>账号登录</div>
                    <div><img src="./images/right1.png" alt="" />&nbsp;&nbsp;<a href="./register.html">立即注册</a></div>
                </header>
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



