// 1. combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，
// 合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
// 2. 注意！这一步完成后，返回的整体reducer，也是immutable格式的
// 也就是说，整个项目的store里的数据，从头开始都全程是immutable格式的，这也是为什么下面所有reducer
// 用的都是immutable的get、set、getIn等方法；
import { combineReducers } from 'redux-immutable'

// 引入的redux模块（Recommend页面）
import { reducer as recommend_Reducer } from '../application/Recommend/store/index'
import { reducer as singers_Reducer } from '../application/Singers/store/index'
import { reducer as rank_Reducer } from '../application/Rank/store/index'
import { reducer as albumReducer } from '../application/Album/store/index'
import { reducer as singerInfoReducer } from '../application/Singer/store/index'

export default combineReducers({
    // 之后开发具体功能模块的时候添加 reducer
    // 为空时会控制台会报错【Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.】
    recommend: recommend_Reducer,
    singers: singers_Reducer,
    rank: rank_Reducer,
    album: albumReducer,
    singerInfo:singerInfoReducer
})