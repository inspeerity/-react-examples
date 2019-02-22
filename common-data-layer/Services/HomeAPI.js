import { composeService } from './utils'
import { homeData } from '../../Tests/mockApi/Home'

export default class HomeAPI {
  static get() {
    return composeService('home', homeData)
  }
}
