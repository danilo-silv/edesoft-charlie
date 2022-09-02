import { AxiosResponse } from 'axios'

import { application } from '../serializers'
import { Response } from '../types'

export default class Serializers {
  items = (res: AxiosResponse<Response> | any): Response => {
    const { data } = application(res)

    return data
  }

  item = (res: AxiosResponse<Response> | any): Response => {
    const { data } = application(res)

    return data
  }
}
