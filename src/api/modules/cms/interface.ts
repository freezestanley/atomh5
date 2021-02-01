export interface GetAllOrgTreeRes {
  id: string;
  sysId: string;
  comCode: string;
  upComCode: string;
  name: string;
  shortName: string;
  outComCode: string;
  description: string;
  satrapName: string;
  comGrade: string;
  key?: string;
  title?: string;
  children?: GetAllOrgTreeRes[];
}
export interface GetSalesUserInfoListRes {
  accountName: string;
  accountNo: string;
  accountType: string;
  birthday: string;
  comCode: string;
  gender: string;
  id: string;
  idNumber: string;
  idType: string;
  mobile: string;
  name: string;
  organizationName: string;
  parentName: string;
  position: string;
  sourceName: string;
  status: string;
  upAccountNo: string;
  label: string;
}
export interface CmsProjectType extends PageTypes {}
export interface LastThinkReq extends PageTypes {}
export interface LastThinkRes {
  author: string;
  timestamp: number;
  title: string;
  unique_id: string;
  pic_url: string;
  url?: string;
}
export interface NewsRes {
  author: string;
  timestamp: number;
  title: string;
  unique_id: string;
  pic_url: string;
  url?: string;
}
export interface CmsProjectDetailReq {
  projectUniqueId: string;
}
export interface CmsProjectDetailRes {
  focus: string;
  avatar_url: string;
  author: string;
  author_description_html: string;
  geographies: string;
  html: string;
  industry: string;
  investment_horizon: string;
  lockup: string;
  status: string;
  strategy_type: string;
  tags: string[];
  target_return: string;
  target_size: string;
  title: string;
  unique_id: string;
  website: string;
  trading_platform_description: string;
  trading_status_description: string;
}
export interface CmsProjectsList {
  focus: String;
  geographies: String;
  industry: String;
  investment_horizon: String;
  lockup: String;
  status: String;
  strategy_type: String;
  tags: String[];
  target_return: String;
  target_size: String;
  title: String;
  unique_id: String;
  website: String;
}
