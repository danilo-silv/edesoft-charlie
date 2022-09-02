export type Data = {
  data: any
  metadata?: any
}

export type Config = {
  headers: boolean
  status?: number
}

export type Response = {
  data?: Data | any
  headers?: any
  metadata?: any
  status?: number
}

export type Handlers = {
  handleSuccess?: boolean
  handleError?: boolean
  headers?: boolean
  status?: number
}

export type Options = {
  headers?: any
  data?: any
  config?: Handlers | Config
}

export type Error = {
  name?: any
  stack?: any
  response: any
  status?: number
}

export interface ErrorResponse {
  code: number
  message: string
  status: string
  errors: []
}

export type SuccessResponse = {
  data?: Data
  headers?: any
}
