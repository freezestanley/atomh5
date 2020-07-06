import { ModelType } from '@/models/types';
interface StateTypes {
  title: string;
}
const Model: ModelType<StateTypes>  = {
  namespace: 'demo',
  state: {
    title: '项目模板'
  },
  reducers: {
    setTitle(state, {payload: {title}}) {
      return {...state, title}
    }
  },
  effects: {
    * getTitle ({payload: {}}, {call, put}) {
      
    }
  }
}
export default Model;