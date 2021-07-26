import React from 'react'                               // 万物起源 ┗( ▔, ▔ )┛
import { GlobalStyle } from './style'                   // 全局样式

// import { IconStyle } from './assets/iconfont/iconfont'  // 本地的图标库
import '@/assets/iconfont/iconfont.css' // 引入有bug，改回css引入

import { Provider } from 'react-redux'                  // redux的Provider方法
import store from './store/index'                       // redux的公共仓库（src/store/index.js）
import routes from './routes/index'                     // 路由信息

import { Data } from '@/store/MySimulationRedux' // 模拟的redux

import { renderRoutes } from 'react-router-config'
// 【react-router-config】插件的方法，转化传参中的路由信息→结构化的render标签（页面中props中可读）
// 配合【react-router-dom】组件，根据当前url，适配renderRoute中转化出的routes结构，显示内容
// 类似于vue中的<router />，可以理解为放的是子页面的位置

import { BrowserRouter } from 'react-router-dom'
// 【react-router-dom】插件的方法，将render路由信息转化
// 可以理解为一个路由的触发环境，renderRoutes()在其内才可作为类似<router />生效
// 用BrowserRouter而不是HashRouter，因为希望使用history模式而不是hash模式

function App() {
  return (
    // Provider代替了原来的<div id="app">成为顶级父级，以组件传props的形式，让内部的后代都可以读取到store
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        {/* <IconStyle /> */}

        <Data>
          {renderRoutes(routes)}
        </Data>

      </BrowserRouter>
    </Provider>
  )
}

export default App
