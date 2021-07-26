//reducer.js
import * as actionTypes from './constants'
import { fromJS } from 'immutable' // 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

// const defaultState = fromJS({
//   singerList: [],         // 歌手列表
//   enterLoading: true,     // 控制进场Loading
//   pullUpLoading: false,   // 控制上拉加载动画
//   pullDownLoading: false, // 控制下拉加载动画
//   pageCount: 0,            // 这里是当前页数，我们即将实现分页功能
//   hasMorePage: true       // 是否包含继续的分页
// })
const defaultState = fromJS({
  artist: {},
  songsOfArtist: [],
  loading: true
})

//store/reducer.js
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST:
      return state.set('artist', action.data)
    case actionTypes.CHANGE_SONGS_OF_ARTIST:
      return state.set('songsOfArtist', action.data)
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('loading', action.data)
    default:
      return state
  }
}