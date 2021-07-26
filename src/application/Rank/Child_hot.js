import React from 'react'
import { Thebox222, UpdateDay } from './style'

function Child_hot(props) {

  const data = props.data.toJS()
  console.log('hot', data)

  const refresh = props.refresh

  return (
    <div>
      {
        data.map(item => {
          return (
            <Thebox222 key={item.id}>
              <img
                  src={item.coverImgUrl}
                // onLoad={()=>{console.log('加载完啦')}}
                // onLoad={props.updateScroll}
                  onLoad={refresh}
              />
              <UpdateDay>{item.updateFrequency}</UpdateDay>
            </Thebox222>
          )
        })
      }
    </div>
  )
}

export default React.memo(Child_hot)

