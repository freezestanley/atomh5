import request from '../../config'
import * as Types from './interface'
// import { IS_DEV } from '@/utils/env'
const prefix = ``

// sto项目列表
export const CmsArticle = async () => request.post(`${prefix}/cms/article`)
export const CmsProject = async () => request.post(`${prefix}/cms/project`)
export const CmsNews = async (params: Types.LastThinkReq) =>
  request.get(`${prefix}/cms/newslist`, { params })
export const CmsProjectDetail = async (params: Types.CmsProjectDetailReq) =>
  request.get(`${prefix}/cms/project`, { params })

export const CmsProjects = async (data: Types.CmsProjectType) => {
  return request.get(`${prefix}/cms/projects`, { data })
}

export const CmsSubscription = async (params: Types.CmsEmailReq) => {
  return request.get(`${prefix}/subscriptions`, { params })
}

export default {
  CmsArticle,
  CmsProject,
  CmsProjectDetail,
  CmsProjects,
  CmsNews,
  CmsSubscription,
}
