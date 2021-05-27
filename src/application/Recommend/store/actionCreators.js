//actionCreators.js
import * as actionTypes from './constants'
import { fromJS } from 'immutable'// 将 JS 对象转换成 immutable 对象
import request from '@/api/request' // 封装的axios请求

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})
export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})
export const changeEnterLoading = (data) => ({ // 针对loading的action
  type: actionTypes.CHANGE_ENTER_LOADING,
  data: data  // 开关loading只需要简单的bool，不用转immutable
})

export const getBannerList = () => {
  return (dispatch) => {
    request.getBannerRequest().then(res => {
      console.log(res.data.banners)
      dispatch(changeBannerList(res.data.banners))
    }).catch(() => {
      console.log('轮播图数据传输错误')
    })
  }
}
export const getRecommendList = () => {
  return (dispatch) => {
    request.getRecommendListRequest().then(res => {
      console.log(res.data.result)
      dispatch(changeRecommendList(res.data.result))
      dispatch(changeEnterLoading(false)) // 不另开一个时事件了，推荐列表渲染完后就同时修改redux里的loading关闭
    }).catch(() => {
      console.log('推荐歌单数据传输错误')
    })
  }
}

