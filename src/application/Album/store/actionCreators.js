import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from './constants'
import request from '@/api/request' // 封装的axios请求
import { fromJS } from 'immutable'

const changeCurrentAlbum = (data) => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS(data)
})

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
})

export const getAlbumList = (id) => {
  return dispatch => {
    request.getAlbumDetailRequest(id).then(res => {
      let data = res.data.playlist
      dispatch(changeCurrentAlbum(data))
      dispatch(changeEnterLoading(false))
    }).catch(() => {
      console.log('获取 album 数据失败！')
    })
  }
}