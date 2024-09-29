/**
 * 获取验证码
 */
/**
 * 获取验证码
 */
import type { ISystemCaptcha, ISystemSentence, ISystemVisitor, IWebsite } from './type'
import { http } from '~/api/http'

export const getSystemCaptcha = () => {
  return http.request<ISystemCaptcha.Data>({
    url: 'system/captcha',
    method: 'GET',
    isLoading: false
  })
}

/**
 * 站点配置
 */
export const getSystemWebsite = () => {
  return http.request<IWebsite.Data>({
    url: 'system/website',
    method: 'GET',
    server: false,
    params: {
      _t: new Date().getTime()
    },
    isLoading: false
  })
}
/**
 * 每日句子
 */
export const getSystemSentence = () => {
  return http.request<ISystemSentence.Datum[]>({
    url: 'system/sentence',
    method: 'GET'
  })
}
/**
 * 访客所在地天气
 */
export const getSystemVisitor = () => {
  return http.request<ISystemVisitor.IRes['data']>({
    url: '/system/access',
    method: 'GET'
  })
}
