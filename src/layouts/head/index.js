import React from 'react';
import PropTypes, { func } from 'prop-types';
import router from 'umi/router';
import Link from 'umi/link';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import { message } from 'antd';
import store from '../../../utils/store';
// import menuRoute from 'src/components/menu/menuRoute'
import style from './head.less';
import getEnv from '../../../utils/env';

let DevHost = 'https://test.url.net';
const Dict = {
  local: 'http://localhost:8000',
  dev: 'https://dev.url.net',
  test: 'https://test.url.net',
  uat: 'https://uat.url.net',
  pre: 'https://pre.url.net',
  prd: 'https://url.net',
};
const HostDict = {
  local: 'https://www.prd.url.net',
  dev: 'https://www.dev.url.net',
  test: 'https://www.test.url.net',
  uat: 'https://www.uat.url.net',
  pre: 'https://www.pre.url.net',
  prd: 'https://www.url.net',
};

DevHost = Dict[getEnv()];
class header extends React.Component {
  constructor(props) {
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
        <div className={style.left} />
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
function mapStateToProps(state) {
  // const { data } = state.menu;
  return {
    // data
  };
}
const locationHeader = withRouter(header);
export default connect(mapStateToProps)(locationHeader);


function PersonContent(prop) {
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
            const serverName = store.getKey('serverName');
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
