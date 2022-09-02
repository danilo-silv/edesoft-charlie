if (!process.env.REACT_APP_API_BASE_URL) {
  throw new Error('REACT_APP_API_BASE_URL variable missing .env')
}

if (!process.env.REACT_APP_API_HEADERS_CONTENT_TYPE) {
  throw new Error('REACT_APP_API_HEADERS_CONTENT_TYPE variable missing .env')
}

export const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const REACT_APP_API_HEADERS_CONTENT_TYPE =
  process.env.REACT_APP_API_HEADERS_CONTENT_TYPE

const config = {
  api: {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      contentType: process.env.REACT_APP_API_HEADERS_CONTENT_TYPE
    },
    timeout: 80000
  }
}

export default config
