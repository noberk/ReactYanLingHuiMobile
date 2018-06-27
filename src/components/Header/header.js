import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                        <Link to="./login">登录</Link>&nbsp;
                        <span>|</span>&nbsp;
                        <Link to="./register">注册</Link>
                    </div>
                </div>
            </header>
        );
    }
}

 




