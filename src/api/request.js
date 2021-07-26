import { axiosInstance } from './config' // 定义过拦截器的axios

export default {
  getBannerRequest: () => { // 轮播图列表
    return axiosInstance.get('/banner')
  },
  getRecommendListRequest: () => { // 推荐歌单列表
    return axiosInstance.get('/personalized')
  },
  getHotSingerListRequest: (offset, limit) => { // 热门歌手列表
    console.log('~~~~~~~~~~~~', offset, limit)
    return axiosInstance.get(`/top/artists?offset=${offset}&limit=${limit}`)
  },
  getSingerListRequest: (type, area, initial, offset, limit) => { // 按类别区分的歌手列表
    // type 取值:
    //   -1:全部
    //   1:男歌手
    //   2:女歌手
    //   3:乐队
    // area 取值:
    //   -1:全部
    //   7:华语
    //   96:欧美
    //   8:日本
    //   16:韩国
    //   0:其他
    // initial 首字母:不设首字母传null
    console.log('~~~~~~~~~~~~', type, area, initial, offset, limit)
    return axiosInstance.get(`/artist/list?type=${type}&area=${area}&initial=${initial}&offset=${offset}&limit=${limit}`)
  },
  getRankList: (type) => { // 获取电台列表 new 新晋电台 hot 热门电台
    return axiosInstance.get(`/toplist/detail?type=${type}`)
  },
  getAlbumDetailRequest: (id) => { // 根据id，获取歌单的具体歌曲列表内容
    return axiosInstance.get(`/playlist/detail?id=${id}`)
  }
}