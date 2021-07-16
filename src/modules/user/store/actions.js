import services from '@/http'
import { Promise } from 'core-js'
import * as types from './mutation-types'

export const ActionGetList = () => {
  return services.user.getUnitList().then(res => {
  })
}