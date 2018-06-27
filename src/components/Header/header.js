import React, { Component } from 'react';
import './header.less';



export class Header extends Component {
    render() {
        return (
            <header id="header">
                <div>
                    <img src="./images/logo.png" alt="" />
                    <div>
                        延陵荟互助系统
                    </div>
                    <div id="login_reg">
                        <a href="./login.html">登录</a>&nbsp;
                        <span>|</span>&nbsp;
                        <a href="./register.html">注册</a>
                    </div>
                </div>
            </header>
        );
    }
}

 




