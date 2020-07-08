import React, {memo} from 'react';
import style from '../head.less';
function PersonContent() {
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
export default memo(PersonContent);