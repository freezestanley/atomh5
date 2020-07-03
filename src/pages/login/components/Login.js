import React from 'react';
import {Input, Button, message} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import router from 'umi/router';
import style from './index.less';
// import {login} from '@/network/login';

class Login extends React.Component {
  userNameonChange = e => {
    this.setState({
      userName: e.target.value,
    });
  };

  pwdonChange = e => {
    this.setState({
      password: e.target.value,
    });
  };

  login = () => {
    const {userName, password} = this.state;
    // TODO 改为当前项目登录接口
    // login({
    //   userName,
    //   password,
    // }).then(res => {
    //   console.log('res', res);
    //   if (res.success) {
        localStorage.setItem('token', res.data);
        message.success('登录成功', 1.5, () => {
          router.replace(
            '/demo', // TODO 新项目记得修改
          );
        });
      // } else {
      //   message.error(res.msg);
      // }
    // });
  };

  render() {
    return (
      <div className={style['antd-pro-layouts-user-layout-container']}>
        <div className={style['login-container']}>
          <div className={style.title}>
            盎司管理后台
          </div>
          <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined />} className={style.input} onChange={this.userNameonChange} />
          <Input.Password size="large" placeholder="请输入密码" className={style.input} onChange={this.pwdonChange} />
          <Button size="large" type="primary" block className={style.login} onClick={this.login}>登录</Button>
        </div>
      </div>
    );
  }
}

export default Login;
