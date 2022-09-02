import axios from 'axios'

import config from './config'

const client = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': config.api.headers.contentType
  }
})

export default client
