import axios from 'axios'
import config from './config'

const composeService = (url, mockData) => {
  if (config.useInternalData) {
    return new Promise((resolve, reject) => {
      resolve({ data: mockData })
    })
  }
  return axios.get(config.baseUrl + url)
}
export { composeService }
