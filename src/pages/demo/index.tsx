import React, { useState,useEffect } from 'react';
import DemoComponents from './components/demoComponents';
import { Button, Cell } from 'zarm';

interface PropTypes {

}
const Demo = (props: PropTypes) => {
  const [multiple,setMultiple] = useState<boolean>(true),
  [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    console.log('componentDidMount', props);
  }, []);
  return (
    <div>
       <Cell title="multiple">
        <Button>default</Button>
      </Cell>
    </div>
  );
};
export default Demo;
