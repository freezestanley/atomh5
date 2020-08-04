import React from 'react'
import { Input, Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { history } from 'umi'
import style from './index.less'
// import {login} from '@/network/login';

class Login extends React.Component {
  userNameonChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({
      userName: e.target.value,
    })
  }

  pwdonChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({
      password: e.target.value,
    })
  }

  login = () => {
    // const {userName, password} = this.state;
    // TODO 改为当前项目登录接口
    // login({
    //   userName,
    //   password,
    // }).then(res => {
    //   console.log('res', res);
    //   if (res.success) {
    // localStorage.setItem('token', res.data);
    message.success('登录成功', 1.5, () => {
      history.replace(
        '/' // TODO 新项目记得修改
      )
    })
    // } else {
    //   message.error(res.msg);
    // }
    // });
  }

  render() {
    return (
      <div className={style['antd-pro-layouts-user-layout-container']}>
        <div className={style['login-container']}>
          <div className={style.title}>福满保险管理后台系统</div>
          <Input
            size="large"
            placeholder="请输入用户名"
            prefix={<UserOutlined />}
            className={style.input}
            onChange={this.userNameonChange}
          />
          <Input.Password
            size="large"
            placeholder="请输入密码"
            className={style.input}
            onChange={this.pwdonChange}
          />
          <Button
            size="large"
            type="primary"
            block
            className={style.login}
            onClick={this.login}
          >
            登录
          </Button>
        </div>
      </div>
    )
  }
}

export default Login
