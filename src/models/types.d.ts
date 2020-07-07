import { Effect, ImmerReducer } from 'umi';
interface ModelType<T> {
  namespace: string;
  state: T;
  effects: {
    [propsName: string]: Effect
  };
  reducers: {
    [propsName: string]: ImmerReducer<T>
  }
}