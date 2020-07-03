import React from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Spin, Icon } from 'antd';
import {deepClone} from 'utils/util';
import store from 'utils/store';
import Header from './head';
import Left from './left';
import { MenuContext, menu, menuConfig } from '../MenuContext';
import styles from './index.less';
// import { getConsoleCode } from '@/network/product';

const antIcon = <Icon type="loading" style={{ fontSize: 60 }} spin />;
// todo getConfig setConfig env
class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      ready: false,
    };
  }

  setMenus(menus = []) {
    this.props.dispatch({
      type: 'global/setMenus',
      payload: {
        menus,
      },
    });
  }

  setTitle = (title) => {
    this.setState({
      title,
    });
  };

  updateMenu = () => {
    // 保存菜单context

    const conf = this.setMenuActive(menu);
    this.setState({ menu: conf }, () => {
      // 渲染菜单
      this.setMenus(conf);
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (!this.state.ready) { // 根据接口权限展示页面
        // getConsoleCode({}).then(res => {
        //   if (res.success) {
        //     store.setKey('code', res.data);
        //     this.setState({
        //       ready: true,
        //     });
        //   }
        // });
      }


      this.updateMenu();
      window.scrollTo(0, 0);
    }
  }


  setMenuActive = (menu, deep = true) => {
    const cloneMenu = deep ? deepClone(menu) : menu.slice(0);
    console.log('active', cloneMenu);
    cloneMenu.every(m => {
      if (m.url === this.props.location.pathname) {
        m.active = true;
        return false;
      } if (m.children) {
        this.setMenuActive(m.children, false);
      }
      return true;
    });
    return cloneMenu;
  };

  componentDidMount() {
    this.setTitle('管理系统Title');
    this.updateMenu();
    if (this.props.location.pathname !== '/login') {
      // getConsoleCode({}).then(res => {
      //   if (res.success) {
      //     store.setKey('code', res.data);
      //     this.setState({
      //       ready: true,
      //     });
      //   }
      // });
    }
  }


  layout = () => {
    console.log('ready', this.state.ready);
    if (this.props.location.pathname === '/login') {
      return (
        <div className={styles.userContent}>
          <div className={styles.content}>
            <div className={styles.main}>
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className={styles.header}>
          <Header />
          <div className={styles.content}>
            <div className={styles.left}>
              {this.props.menus.length ? (
                <Left title={this.state.title} menus={this.props.menus} />
              ) : (
                ''
              )}
            </div>

            <div className={styles.right}>
              { this.props.children}
              {/* { this.state.ready && this.props.children} */}
            </div>
          </div>
        </div>
        <div className="loadMask ant-modal-wrap" style={{ display: 'none' }} id="loadMask">
          <Spin indicator={antIcon} />
        </div>
      </React.Fragment>
    );
  };

  render() {
    const _this = this;
    return <React.Fragment>{_this.layout()}</React.Fragment>;
  }
}
function mapStateToProps(state) {
  if (state.global) {
    const { currentLanguage, time, userInfo, menus} = state.global;
    return {
      currentLanguage, time, menus, userInfo,
    };
  }
  return {};
}
const rootLayoutPage = withRouter(LayoutPage);
export default connect(mapStateToProps)(rootLayoutPage);
