// combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，
// 合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
import { combineReducers } from 'redux-immutable'

// 引入的redux模块（Recommend页面）
import { reducer as recommendReducer } from '../application/Recommend/store/index'

export default combineReducers({
    // 之后开发具体功能模块的时候添加 reducer
    // 为空时会控制台会报错【Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.】
    recommend: recommendReducer
})