
import React from 'react'

function Haha() {
  return (
      <Toggle>
        <Imerror></Imerror>
      </Toggle>
  )
}

function Imerror(){
  let cc = 'haha'
  return (
    <p>{cc[120].haha}</p>
  )
}

class Toggle extends React.Component {
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log(error)
    return { hasError: true }
  }
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log(error, errorInfo)
    // logErrorToMyService(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>里面的组件有报错，这是备用显示的内容</h1>
    }
    return this.props.children
  }
}

export default React.memo(Haha)

