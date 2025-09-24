import { isEmpty } from '@eqian/utils-vue'
import { isObject } from '@vue/shared'
import type { IRequestParamsConfig } from '~/api/type'
// import { useGetTokenCookie } from '~/composables/use-cookies'
import { useLogin } from '~/composables/use-login'

/**
 * 参数处理函数
 * 将对象参数转换为URL查询字符串格式
 * @param params - 需要转换的参数对象
 * @returns 转换后的查询字符串
 */
export function tansParams(params: { [x: string]: any }): string {
  let result = ''
  
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    const part = `${encodeURIComponent(propName)}=`
    
    // 检查值是否有效
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        // 处理嵌套对象
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
        // 处理基本类型值
        result += `${part + encodeURIComponent(value)}&`
      }
    }
  }
  
  return result
}
/**
 * HTTP请求类
 * 封装了所有HTTP请求相关的功能
 */
class Http {
  private BASEURL: string

  /**
   * 构造函数
   * 初始化基础URL
   */
  public constructor() {
    this.BASEURL = ''
  }

  /**
   * 构建完整的请求URL
   * @param config - 请求配置对象
   * @returns 完整的请求URL
   */
  private getUrl(config: IRequestParamsConfig): string {
    let url = ''
    
    // 处理完整的 URL. 非 http, https 的才处理
    const isExternal = /^(https?:)/.test(config.url)
    
    if (!isExternal) {
      url = `${this.BASEURL}${config.url.replace(/^\//, '')}`
    }
    
    // 对于GET和DELETE请求，将参数添加到URL中
    if (config.method === 'GET' || config.method === 'DELETE') {
      if (config.params) {
        url = `${url}?${tansParams(config.params)}`.slice(0, -1)
      }
    }
    
    return url
  }

  /**
   * 处理请求错误
   * TODO: 实现具体的错误处理逻辑
   */
  private handleRequestError(): void {
    // 预留错误处理逻辑
  }

  /**
   * 生成随机UUID作为请求的唯一标识
   * @returns 随机生成的UUID字符串
   */
  private generateKey(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  /**
   * 发送HTTP请求
   * @param config - 请求配置对象
   * @returns Promise对象，包含响应数据
   */
  public request<T = any>(config: IRequestParamsConfig): Promise<T> {
    const { $config } = useNuxtApp()
    this.BASEURL = $config.public.BASE_URL
    
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        await useFetch(this.BASEURL + config.url.replace(/^\//, ''), {
          method: config.method || 'GET',
          lazy: true,
          key: this.generateKey(),
          timeout: 10000,
          server: !!config.server,
          query: (config.method === 'GET' || config.method === 'DELETE') ? config.params : undefined,
          body: (config.method === 'POST' || config.method === 'PUT') ? config.params : undefined,
          
          // 请求拦截器
          onRequest({ request: _, options }): Promise<void> | void {
            // 添加认证token
            const cookies = useCookie('__TOKEN_KEY__')
            if (config.params?.token || cookies) {
              options.headers = { 
                ...options.headers, 
                Authorization: config.params?.token || cookies.value 
              } as any
            }
            
            // 添加自定义请求头
            if (config.header) {
              options.headers = { ...options.headers, ...config.header }
            }
          },
          
          // 请求错误处理
          onRequestError({ request }) {
            console.error('请求错误:', request)
            reject(request)
          },
          
          // 响应拦截器
          onResponse({ request: _, response }) {
            const { code } = response._data
            
            if (code !== 200) {
              // 处理认证失败
              if (code === 401 || code === 423) {
                useLogin()
              }
              reject(response._data)
            } else {
              resolve(response._data.data || {})
            }
          },
          
          // 响应错误处理
          onResponseError({ request: _, response }) {
            console.error('响应错误:', request, response)
            reject(response._data)
          }
        })
      } catch (error) {
        console.error('请求异常:', error)
        reject(error)
      }
    })
  }
}

export const http = new Http()
