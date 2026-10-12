import axios from 'axios'
import router from '../router'
import { getToken, clearAuth } from '../utils/auth'
import mockAdapter from './mock'

// 约定后端统一返回 { code, data, msg }，code === 0 表示成功
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

if (import.meta.env.VITE_USE_MOCK === 'true') {
  service.defaults.adapter = mockAdapter
}

service.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res && res.code !== undefined && res.code !== 0) {
      return Promise.reject(new Error(res.msg || '请求失败'))
    }
    return res.data
  },
  error => {
    const { response } = error
    if (response && response.status === 401) {
      clearAuth()
      router.replace({ path: '/login', query: { redirect: router.currentRoute.value.fullPath } })
    }
    const msg = (response && response.data && response.data.msg) || error.message || '网络异常'
    return Promise.reject(new Error(msg))
  }
)

export default service
