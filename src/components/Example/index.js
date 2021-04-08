import React from 'react'

class Example extends React.Component {

  constructor(props) {
    super(props)
  }

  laugh(){
    console.log('【子页面】laugh方法 haha')
  }

  render() {
    return (
      <p>这是子页面</p>
    )
  }
}

export default React.memo(Example)