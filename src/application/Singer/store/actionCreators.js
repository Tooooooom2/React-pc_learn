//actionCreators.js
import * as actionTypes from './constants'
import { fromJS } from 'immutable'// 将 JS 对象转换成 immutable 对象
import request from '@/api/request' // 封装的axios请求

const changeArtist = (data) => ({
  type: actionTypes.CHANGE_ARTIST,
  data: fromJS(data)
})

const changeSongs = (data) => ({
  type: actionTypes.CHANGE_SONGS_OF_ARTIST,
  data: fromJS(data)
})
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const getSingerInfo = (id) => {
  return dispatch => {
    request.getSingerInfoRequest(id).then(data => {
      // console.log('data=',data)
      dispatch(changeArtist(data.data.artist))
      dispatch(changeSongs(data.data.hotSongs))
      dispatch(changeEnterLoading(false))
    })
  }
}