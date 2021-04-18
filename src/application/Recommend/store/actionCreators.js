//actionCreators.js
import * as actionTypes from './constants'
import { fromJS } from 'immutable'// 将 JS 对象转换成 immutable 对象
import request from '@/api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
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
    }).catch(() => {
      console.log('推荐歌单数据传输错误')
    })
  }
}
