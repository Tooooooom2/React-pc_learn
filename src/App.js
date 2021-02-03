// 万物起源 ┗( ▔, ▔ )┛
import React from 'react'
// 引入 redux 的Provider方法
import { Provider } from 'react-redux'
// 引入 src/store/index.js中的redux的公共仓库
import store from './store/index'
// 用【styled-components】引入js化的全局css基础设置(将css绑定作为特殊dom使用)
import { GlobalStyle } from './style'
// 引入下载到本地的图标库
import { IconStyle } from './assets/iconfont/iconfont'
// src/routes/index.js中配置的路由信息
import routes from './routes/index'
// 【react-router-config】插件，转化传参中的路由信息→结构化的render标签（页面中props中可读）
// 配合【react-router-dom】组件，根据当前url，适配renderRoute中转化出的routes结构，显示内容
// 类似于vue中的<router />
// 注意renderRoutes只会向内触发一层
import { renderRoutes } from 'react-router-config'
// 【react-router-dom】插件的方法，将render路由信息转化
// 可以理解为触发了其内部的renderRoutes的路由信息,并根据url和路由信息配合跳转
// 用BrowserRouter而不是HashRouter，因为希望使用history模式而不是hash模式
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    // Provider代替了原来的<div id="app">，作用是让内部的后代都可以读取到store
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <IconStyle />
        {/* 这一步相当于vue中的<router />,开启跳转功能 */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  )
}

export default App
