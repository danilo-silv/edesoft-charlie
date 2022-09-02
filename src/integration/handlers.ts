import { Error, Options, Response } from './types'

export const responseSuccess = (response: Response, options?: Options) => {
  const newResponse = {
    data: {},
    metadata: {},
    headers: {},
    status: 200
  }

  if (response?.data) newResponse.data = response?.data

  if (response?.data?.metadata) newResponse.metadata = response?.data?.metadata

  if (response?.status) newResponse.status = response?.status

  if (options?.config?.headers) newResponse.headers = response?.headers

  return newResponse
}

export const responseError = (error: Error) => {
  const { name, stack, response, status } = error

  return {
    response,
    name,
    stack,
    status
  }
}
