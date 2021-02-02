export interface PostContactReq {
  email: string;
  message: string;
  name: string;
  subject: string;
}
export interface QueryContactRes extends PageTypes {}
