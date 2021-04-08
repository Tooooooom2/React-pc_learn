
import React from 'react'
import Example from '@/components/Example' // 页面正常引用、使用常规组件 Example

export const {Provider,Consumer} = React.createContext('默认值') // 建立Context广播，()内为默认值

// const MyContext
function Singers() {
  return (
    <div>
      <p>这是页面 Singers</p>

      {/* Context广播给包裹的后代组件 */}
      <Provider value="小白啊">

          <Example>Click me!</Example>

      </Provider>

    </div>
  )
}

export default React.memo(Singers)

