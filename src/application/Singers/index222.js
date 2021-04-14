
import React from 'react'

// 子组件
const Child = React.forwardRef(

  function alala (props, ref) {
    console.log(props)
    return (
      <p ref={ref}>Hello</p>
    )
  }

)

console.log(Child)

export default React.memo(Child)

