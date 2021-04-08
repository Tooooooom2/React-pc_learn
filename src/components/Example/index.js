import React from 'react'
import LogProps from '../LogProps'

function Example() {
  return (
    <div>
      <p>这是页面 Example</p>
      <LogProps>23333</LogProps>
    </div>
  )
}

// export default React.memo(Example)

// 返回的是高阶组件包裹自己
export default React.memo(Example)