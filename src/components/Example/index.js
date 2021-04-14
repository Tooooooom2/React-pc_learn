import React from 'react'

const Example = React.forwardRef((props, ref) => (
  <div>
    <input ref={ref}
        type="text"
    />
    <button>{props.children}</button>
  </div>
))

export default React.memo(Example)