import React, { useEffect } from 'react';
import {Button} from 'antd';
import {GET_TAG_LIST} from '@/services';
// 这里可以任意命名
const Demo2 = props => {
  useEffect(() => {
    console.log('componentDidMount', props);
    fetchData();
  }, []);
  async function fetchData() {
    try {
      await GET_TAG_LIST()
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
