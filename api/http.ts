import type { IRequestParamsConfig } from '~/api/type'

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
    this.BASEURL = 'http://43.138.222.187:8000/'
  }

  getUrl (config:IRequestParamsConfig) {
    let url = ''
    // 处理完整的 URL. 非 http, https 的才处理
    const isExternal = /^(https?:)/.test(config.url)
    if (!isExternal) {
      url = `${this.BASEURL}${config.url.replace(/^\//, '')}`
    }
    if (config.method === 'GET' || config.method === 'DELETE') {
      url = `${url}?${tansParams(config.params)}`.slice(0, -1)
    }
    return url
  }

  handleRequestError () {

  }

  request <T=any> (config: IRequestParamsConfig): Promise<T> {
    return new Promise(async (resolve, reject) => {
      return useFetch(this.getUrl(config), {
        method: config.method || 'GET',
        lazy: !!config.lazy,
        server: config.server || false,
        query: config.params,
        body: config.params,
        onRequest ({ request, options }): Promise<void> | void {
          if (config.method === 'GET' || config.method === 'DELETE') {
            options.query = {}
            options.body = {}
          }
          console.log(' 请求处理', request, options)
        },
        onRequestError ({ request, options, error }) {
          console.log(' 请求错误', request, options)
          reject(request)
        },
        onResponse ({ request, response, options }) {
          resolve(response._data || {})
        },
        onResponseError ({ request, response }) {
          console.log(' 响应错误', request, response)
          reject(response)
        }
      })
    })
  }
}

export const http = new Http()
