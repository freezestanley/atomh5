// @ts-nocheck
import React from 'react';
import {withRouter} from 'umi';
import { connect } from 'umi';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import {deepClone} from 'utils/util';
import Header from './head';
import Left from './left';
import { MenuContext, menu, MenuItemType } from '../MenuContext';
import styles from './index.less';
// import { getConsoleCode } from '@/network/product';
interface PropTypes {
  dispatch: any;
  location: any;
  menus: MenuItemType[];
}
interface StateTypes {
  ready: boolean;
  menus: MenuItemType[];
  title?: string;
  global?: any;
}
const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;
// todo getConfig setConfig env
class LayoutPage extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      menus: [],
      ready: false,
    };
  }

  setMenus(menus : MenuItemType[] = []) {
    this.props.dispatch({
      type: 'global/setMenus',
      payload: {
        menus,
      },
    });
  }

  setTitle = (title: string) => {
    this.setState({
      title,
    });
  };

  updateMenu = () => {
    // 保存菜单context
    const conf: MenuItemType[] = this.setMenuActive(menu);
    this.setState({ menus: conf }, () => {
      // 渲染菜单
      this.setMenus(conf);
    });
  };

  componentDidUpdate(prevProps: PropTypes) {
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

  setMenuActive = (menu: MenuItemType[], deep = true): MenuItemType[] => {
    const cloneMenu = deep ? deepClone(menu) : menu.slice(0);
    (cloneMenu as MenuItemType[]).every(m => {
      if (m.url === this.props.location.pathname) {
        // @ts-ignore
        m.active = true;
        return false;
        // @ts-ignore
      } if (m.children) {
        // @ts-ignore
        this.setMenuActive(m.children, false);
      }
      return true;
    });
    return (cloneMenu as MenuItemType[]);
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
function mapStateToProps(state: StateTypes) {
  if (state.global) {
    const { currentLanguage, time, userInfo, menus} = state.global;
    return {
      currentLanguage, time, menus, userInfo,
    };
  }
  return {};
}
// @ts-ignore
const rootLayoutPage = withRouter(LayoutPage);
export default connect(mapStateToProps)(rootLayoutPage);
