import React from 'react';
// import PropTypes, { func } from 'prop-types';
import { history } from 'umi';
import { Link } from 'umi';
import { connect } from 'umi';
import {withRouter} from 'umi';
import { message } from 'antd';
import style from './head.less';
import HeaderMenu from './components/HeaderMenu';
let DevHost = 'https://test.url.net';
const Dict = {
  local: 'http://localhost:8000',
  dev: 'https://dev.url.net',
  test: 'https://test.url.net',
  uat: 'https://uat.url.net',
  pre: 'https://pre.url.net',
  prd: 'https://url.net',
};
interface PropsType {
  env: string;
  userInfo: any;
}
DevHost = Dict['dev'];
// DevHost = Dict[getEnv()];
class header extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      toggle: true,
      products: [],
      userInfo: {},
      money: 0.00,
      productShow: false,
      feeShow: false,
      personContentShow: false,
    };
  }

  componentDidMount() {
    this.setState({
      env: this.props.env,
    });
  }

  render() {
    return (
      <div className={style.head}>
        {/* 一级菜单 */}
        <HeaderMenu />
        <div className={style.right}>

          <div className={style.common}>

            <div
              className="personWrap"
              style={{ position: 'relative' }}
            >
              <i
                style={{ color: '', fontSize: 16 }}
                className="iconfont icontouxiang"
              />
              <div
                className={`${style.personContent} personContent`}
              >
                <PersonContent
                  {...this.props}
                  env={this.props.env}
                  userInfo={this.props.userInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state: any) {
  // const { data } = state.menu;
  return {
    // data
  };
}
// @ts-ignore
const locationHeader = withRouter(header);
export default connect(mapStateToProps)(locationHeader);


function PersonContent(prop: PropsType) {
  const env = prop.env;
  return (
    <div>
      <div className={style.personContentTop}>
        <i />
        <span>管理员</span>
      </div>

      <div className={style.personContentBottom}>
        <div
          onClick={async () => {
            // const serverName = store.getKey('serverName');
            // TODO 登出
            // api.logout({
            //   serverName,
            //   userInfo: prop.userInfo,
            // });
          }}
        >
        退出管理台
        </div>
      </div>
    </div>
  );
}
