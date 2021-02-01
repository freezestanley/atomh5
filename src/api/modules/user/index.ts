import request from '../../config';
import * as Types from './interface';
// 提交联系人
export const PostContact = async (data: Types.PostContactReq) =>
  request.post(`/contact`, { data });
export const QueryContacts = async (data: Types.QueryContactRes) =>
  request.get(`/contacts`, { data });
export const Subscription = async (data: Types.QueryContactRes) =>
  request.post(`/subscription`, { data });
export const Subscriptions = async (data: Types.QueryContactRes) =>
  request.get(`/subscriptions`, { data });

export default {
  PostContact,
  QueryContacts,
  Subscription,
  Subscriptions,
};
