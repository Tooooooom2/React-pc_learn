import { axiosInstance } from './config' // 定义过拦截器的axios

export default {
  getBannerRequest: () => { // 轮播图列表
    return axiosInstance.get('/banner')
  },
  getRecommendListRequest: () => { // 推荐歌单列表
    return axiosInstance.get('/personalized')
  }
}