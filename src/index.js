import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 将react项目的根输出对象App绑定到根dom上
ReactDOM.render(
  // React.StrictMode包裹了App，即在整个项目中都启动了严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals