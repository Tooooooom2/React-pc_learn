import axios from 'axios'

export const baseUrl = 'http://localhost:4000'

// 初始化，赋值baseURL
const axiosInstance = axios.create({
  baseURL: baseUrl
})

// 请求拦截
axiosInstance.interceptors.request.use(
  config => {
    // console.log('发送参数=', config)
    return config
  },
  err => {
    console.log(err, '网络错误')
    return err
  }
)

// 响应拦截
axiosInstance.interceptors.response.use(
  res => {
    // console.log('返回res=', res)
    return res
  },
  err => {
    console.log(err, '网络错误')
    return err
  }
)

export {
  axiosInstance
}