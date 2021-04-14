
import React, { Profiler } from 'react'

function Parent() {

  function onRenderCallback(...args) {
    console.log('Profiler整体传参   ', args)
    console.log('[id]              ', args[0])
    console.log('[phase]           ', args[1])
    console.log('[actualDuration]  ', args[2])
    console.log('[baseDuration]    ', args[3])
    console.log('[startTime]       ', args[4])
    console.log('[commitTime]      ', args[5])
    console.log('[interactions]    ', args[6])
  }

  return (
    <div>
      <Profiler id="theFirst"
          onRender={onRenderCallback}
      >
        <Child />
      </Profiler>
    </div>
  )
}

function Child() {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default React.memo(Parent)

