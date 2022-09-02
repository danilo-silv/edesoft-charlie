import merge from 'lodash/merge'

import client from './client'
import * as handlers from './handlers'

export const DEFAULT_OPTIONS = {
  config: {
    handleSuccess: true,
    handleError: true,
    headers: true
  }
}

export const request = async (method: string, url: string, options: any) => {
  const requestConfig = {
    method,
    url,
    data: options.data,
    params: options.params,
    headers: options.headers
  }

  return client(requestConfig)
    .then((res) => {
      return Promise.resolve(
        options?.config?.handleSuccess ? handlers.responseSuccess(res) : res
      )
    })
    .catch((err) => {
      const errResponse = options?.config?.handleError
        ? handlers.responseError(err)
        : err

      return Promise.reject(errResponse)
    })
}

export const get = (url: string, options?: any) =>
  request('GET', url, merge({}, DEFAULT_OPTIONS, options))

export const post = (url: string, data: any, options?: any) =>
  request(
    'POST',
    url,
    merge({}, DEFAULT_OPTIONS, {
      ...options,
      data
    })
  )

export const put = (url: string, data: any, options: any) =>
  request(
    'PUT',
    url,
    merge({}, DEFAULT_OPTIONS, {
      ...options,
      data
    })
  )

export const patch = (url: any, data: any, options?: any) =>
  request(
    'PATCH',
    url,
    merge({}, DEFAULT_OPTIONS, {
      ...options,
      data
    })
  )

export const del = (url: any, options: any) =>
  request('DELETE', url, merge({}, DEFAULT_OPTIONS, options))
