import React, { useEffect } from 'react';
import {Button} from 'antd';
import DemoComponents from './components/demoComponents';
const Demo = props => {
  useEffect(() => {
    console.log('componentDidMount', props);
  }, []);
  return (
    <div>
      <p>页面模板</p> 
      <DemoComponents name={'页面子组件'} />
      <Button>click</Button>
    </div>
  );
};
export default Demo;
