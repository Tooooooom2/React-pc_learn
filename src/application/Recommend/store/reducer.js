//reducer.js
import * as actionTypes from './constants'
import { fromJS } from 'immutable' // 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS({
  bannerList: [],
  recommendList: []
})

// 注意这里用的set、get和redux无关，这是因为state默认值被转为了
// immutable数据结构，这是immutable的设置、读取的方法；
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', action.data)
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', action.data)
    default:
      return state
  }
}