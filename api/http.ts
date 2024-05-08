import type { IRequestParamsConfig } from '~/api/type'
import { useGetTokenCookie } from '~/composables/use-cookies'
const baseConfig = {
  // 默认地址
  // baseURL: 'http://43.138.188.22:13209/api/v3',
  // baseURL: import.meta.env.VITE_BASE_URL,
  // 设置超时时间
  lazy: true
}
/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams (params: { [x: string]: any; }) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    const part = `${encodeURIComponent(propName)}=`
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (
            value[key] !== null &&
                        value[key] !== '' &&
                        typeof value[key] !== 'undefined'
          ) {
            const _params = `${propName}[${key}]`
            const subPart = `${encodeURIComponent(_params)}=`
            result += `${subPart + encodeURIComponent(value[key])}&`
          }
        }
      } else {
        result += `${part + encodeURIComponent(value)}&`
      }
    }
  }
  return result
}
class Http {
  BASEURL:string
  public constructor () {
    // this.BASEURL = process.env.NODE_ENV === 'production' ? '/api/' : 'http://43.138.222.187:8000/'
  }

  getUrl (config:IRequestParamsConfig) {
    let url = ''
    // 处理完整的 URL. 非 http, https 的才处理
    const isExternal = /^(https?:)/.test(config.url)
    if (!isExternal) {
      url = `${this.BASEURL}${config.url.replace(/^\//, '')}`
    }
    if (config.method === 'GET' || config.method === 'DELETE') {
      if (config.params) {
        url = `${url}?${tansParams(config.params)}`.slice(0, -1)
      }
    }
    return url
  }

  handleRequestError () {

  }

  request <T=any> (config: IRequestParamsConfig): Promise<T> {
    const { $config } = useNuxtApp();
    this.BASEURL = $config.public.BASE_URL;
    return new Promise(async (resolve, reject) => {
      await useFetch(this.BASEURL + config.url.replace(/^\//, ''), {
        method: config.method || 'GET',
        lazy: true,
        server: false,
        query: (config.method === 'GET' || config.method === 'DELETE') ? config.params : undefined,
        body: (config.method === 'POST' || config.method === 'PUT') ? config.params : undefined,
        onRequest ({ request, options }): Promise<void> | void {
          // console.log(' 请求处理', request, options)
          const cookies = useGetTokenCookie()
          if (config.params?.token || cookies) {
            options.headers = { ...options.headers, Authorization: config.params?.token || cookies }
          }
        },
        onRequestError ({ request, options, error }) {
          // console.log(' 请求错误', request, options, error)
          reject(request)
        },
        onResponse ({ request, response, options }) {
          const { code } = response._data
          if (code !== 200) {
            reject(response._data)
          } else {
            resolve(response._data.data || {})
          }
        },
        onResponseError ({ request, response }) {
          // console.log(' 响应错误', request, response)
          reject(response._data)
        }
      })
    })
  }
}

export const http = new Http()
