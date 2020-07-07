import React, { useEffect } from 'react';
import {Button} from 'antd';
import {QueryDictItems} from '@/api';
interface PropTypes {

}
// 这里可以任意命名
const Demo2 = (props: PropTypes) => {
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const res: ResType<string[]> = await QueryDictItems({code: 'PRODUCT_SORT_1'});
      console.log(res);
    } catch (err) {
      // handle err
    }
  }
  return (
    <div>
      <p>页面模板2</p> 
      <Button>click</Button>
    </div>
  );
};
export default Demo2;
