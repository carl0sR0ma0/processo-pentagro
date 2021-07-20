import services from '@/http'
import { Promise } from 'core-js'
import * as types from './mutation-types'

export const ActionGetList = () => {
  return services.user.getUnitList().then(res => {
    return res.data
  })
}

export const ActionSendUser = ({ dispatch }, payload) => {
  return services.user.postUser(payload).then(res => {
    return res.data
  })
}