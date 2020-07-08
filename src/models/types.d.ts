import { Effect, ImmerReducer, SubscriptionAPI } from 'umi';
interface ModelType<T> {
  namespace: string;
  state?: T;
  effects?: {
    [propsName: string]: Effect
  };
  reducers?: {
    [propsName: string]: ImmerReducer<T>
  },
  subscriptions?: {
    [propsName: string]: (params: SubscriptionAPI) => void;
  }
}