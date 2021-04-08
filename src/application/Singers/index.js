
import React, { useEffect } from 'react'
import Example from '../../components/Example'

function Singers() {
  const ref = React.createRef()

  useEffect(() => {
    console.log('【父页面】', ref)
    ref.current.laugh()
  })

  return (
    <div>
      <p>这是父页面</p>
      <Example ref={ref}></Example>
    </div>
  )
}

export default React.memo(Singers)

