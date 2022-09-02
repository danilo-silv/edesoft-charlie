import { Response } from './types'

export const application = (res: Response): Response => {
  const { data = {}, headers = {}, metadata = {}, status } = res

  return {
    data,
    headers,
    metadata,
    status
  }
}
