import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import cors from 'cors'

Vue.use(VueResource)

const http = Vue.http
http.options.root = 'http://pentagro.ddns.com.br:65129/api/user/'

Object.keys(services).map(service => {
  services[service] = Vue.resource('', { }, services[service])
})

const setBearerToken = token => {
  http.headers.common.Authorization = `Bearer ${token}`
}

export default services
export { http, setBearerToken }