
import React from 'react'

const defaultState = 0
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload
    default:
      return state
  }
}

const actions = [
  { type: 'ADD', payload: 0 },
  { type: 'ADD', payload: 1 },
  { type: 'ADD', payload: 2 }
]

const total = actions.reduce(reducer, 0)

console.log(total)

class Toggle extends React.Component {
  render() {
    return (
      <h1>haha</h1>
    )
  }
}

export default React.memo(Toggle)

