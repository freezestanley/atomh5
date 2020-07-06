import { Effect, ImmerReducer } from 'umi';
export interface ModelType<T> {
  namespace: string;
  state: T;
  effects: {
    [propsName: string]: Effect
  };
  reducers: {
    [propsName: string]: ImmerReducer<T>
  }
}