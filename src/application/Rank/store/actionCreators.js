//actionCreators.js
import * as actionTypes from './constants'
import { fromJS } from 'immutable'// 将 JS 对象转换成 immutable 对象
import request from '@/api/request' // 封装的axios请求

export const changeRankListNew = (data) => ({
  type: actionTypes.CHANGE_LIST_NEW,
  data: fromJS(data)
})
export const chageRankListHot = (data) => ({
  type: actionTypes.CHANGE_LIST_HOT,
  data: fromJS(data)
})
export const chageEnterLoading = (data) => ({
  type: actionTypes.CHANGE_enterLoading,
  data: data
})

export const getRankList = () => {
  return (dispatch) => {
    request.getRankList('new').then(res => {
      // console.log(res.data.list)
      dispatch(changeRankListNew(res.data.list.slice(0, 4)))
      dispatch(chageRankListHot(res.data.list.slice(4)))
      dispatch(chageEnterLoading(false))
    }).catch(() => {
      console.log('推荐歌单数据传输错误')
    })
  }
}

