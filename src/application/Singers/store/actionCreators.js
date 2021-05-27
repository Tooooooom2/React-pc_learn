//actionCreators.js
import * as actionTypes from './constants'
import { fromJS } from 'immutable'// 将 JS 对象转换成 immutable 对象
import request from '@/api/request' // 封装的axios请求

const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: fromJS(data)
})
export const changePageCount = (data) => ({
  type: actionTypes.CHANGE_PAGE_COUNT,
  data
})
export const changeEnterLoading = (data) => ({ //进场loading
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})
export const changePullUpLoading = (data) => ({ //滑动最底部loading
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data
})
export const changePullDownLoading = (data) => ({ //顶部下拉刷新loading
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
})
export const changeHasMorePage = (data) => ({ //是否包含继续的分页
  type: actionTypes.CHANGE_HasMorePage,
  data
})

//第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch) => {
    request.getHotSingerListRequest(0, 30).then(res => {
      const data = res.data.artists
      console.log('[actionCreators] 首次获取，热门歌手列表')
      dispatch(changeSingerList(data))        // 存列表
      dispatch(changeEnterLoading(false))     // 第一次加载可能是进入页面的首次逻辑
      dispatch(changePullDownLoading(false))  // 也可能是顶部下拽引起的
    }).catch(() => {
      console.log('热门歌手数据获取失败')
    })
  }
}
//加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    console.log('[actionCreators] 后续刷新，热门歌手列表')
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    // 注意，这里的offset指的是sql意义上的偏移量，不是常规接口的所谓页码数、第几页
    // 要手动乘上每页的limit数才行
    request.getHotSingerListRequest(pageCount * 30, 30).then(res => {
      const data = [...singerList, ...res.data.artists]
      dispatch(changeSingerList(data))
      dispatch(changePullUpLoading(false))  // 更多是底部上拉引起的，关闭
      if (!res.data.more) { // 没有后续的分页内容了
        dispatch(changeHasMorePage(false))
      }
    }).catch(() => {
      console.log('热门歌手数据获取失败')
    })
  }
}

//第一次加载对应类别的歌手
export const getSingerList = (type, area, initial) => {
  return (dispatch) => {
    request.getSingerListRequest(type, area, initial, 0, 30).then(res => { // 这里逻辑和上面获取热门歌手一样，赋值修改三样数据
      const data = res.data.artists
      console.log('[actionCreators] 首次获取分类歌手列表')
      dispatch(changeSingerList(data))
      dispatch(changeEnterLoading(false))       // 第一次加载可能是点击的
      dispatch(changePullDownLoading(false))    // 也可能是顶部下拽引起的
    }).catch(() => {
      console.log('歌手数据获取失败')
    })
  }
}
//加载更多分类歌手
export const refreshMoreSingerList = (type, area, initial) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']) // 这类已经是+1了的pageCount
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    // 注意，这里的offset指的是sql意义上的偏移量，不是常规接口的所谓页码数、第几页
    // 要手动乘上每页的limit数才行
    request.getSingerListRequest(type, area, initial, pageCount * 30, 30).then(res => {
      console.log('[actionCreators] 后续刷新分类歌手列表')
      let data = [...singerList, ...res.data.artists] // 组合添加到尾巴上去
      dispatch(changeSingerList(data))
      dispatch(changePullUpLoading(false))  // 更多是底部上拉引起的，关闭
      if (!res.data.more) { // 没有后续的分页内容了
        dispatch(changeHasMorePage(false))
      }
    }).catch(() => {
      console.log('歌手数据获取失败')
    })
  }
}