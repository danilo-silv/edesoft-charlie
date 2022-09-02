if (!process.env.API_BASE_URL) {
  throw new Error('API_BASE_URL variable missing .env')
}

if (!process.env.API_HEADERS_CONTENT_TYPE) {
  throw new Error('API_HEADERS_CONTENT_TYPE variable missing .env')
}

export const API_BASE_URL = process.env.API_BASE_URL

export const API_HEADERS_CONTENT_TYPE = process.env.API_HEADERS_CONTENT_TYPE

const config = {
  api: {
    baseURL: process.env.API_BASE_URL,
    headers: {
      contentType: process.env.API_HEADERS_CONTENT_TYPE
    },
    timeout: 80000
  }
}

export default config
