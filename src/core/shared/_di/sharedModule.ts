import { api, Api } from '../api/infrastructure/api'
import { asValue } from '_di/resolvers'

export const sharedModule = {
  api: asValue<Api>(api(3))
}
