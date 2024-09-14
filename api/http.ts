import type { IRequestParamsConfig } from '~/api/type'
import { useGetTokenCookie } from '~/composables/use-cookies'
import { useLogin } from '~/composables/use-login'
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
    this.BASEURL = ''
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
    const { $config } = useNuxtApp()
    this.BASEURL = $config.public.BASE_URL
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      await useFetch(this.BASEURL + config.url.replace(/^\//, ''), {
        method: config.method || 'GET',
        lazy: true,
        server: !!config.server,
        query: (config.method === 'GET' || config.method === 'DELETE') ? config.params : undefined,
        body: (config.method === 'POST' || config.method === 'PUT') ? config.params : undefined,
        onRequest ({ request: _, options }): Promise<void> | void {
          // console.log(' 请求处理', request, options)
          const cookies = useGetTokenCookie()
          if (config.params?.token || cookies) {
            options.headers = { ...options.headers, Authorization: config.params?.token || cookies }
          }
          if (config.header) {
            options.headers = { ...options.headers, ...config.header }
          }
        },
        onRequestError ({ request }) {
          // console.log(' 请求错误', request, options, error)
          reject(request)
        },
        onResponse ({ request: _, response }) {
          const { code } = response._data
          if (code !== 200) {
            if (code === 401 || code === 423) {
              useLogin()
            }
            reject(response._data)
          } else {
            resolve(response._data.data || {})
          }
        },
        onResponseError ({ request: _, response }) {
          // console.log(' 响应错误', request, response)
          reject(response._data)
        }
      })
    })
  }
}

export const http = new Http()
