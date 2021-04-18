// createStore 创建store

// applyMiddleware，配合thunk使用
import { createStore, compose, applyMiddleware } from 'redux'

// redux的dispatch默认只能传一个对象参数,redux-thunk的作用就是使dispatch支持传函数参数
// 使用方式:applyMiddleware(thunk)
import thunk from 'redux-thunk'

// 引入由各模块的reducer混合好的最终的reducer
import reducer from './reducer'

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 是配合chrome的Redux DevTools工具使用的，开启才能正常检测获取redux内的值
// compose 是reduce的特殊方法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// createStore 创建store
// 第一个参数为reducer
// 第二个参数为设置store的初始状态
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store