import React from 'react'
import { Thebox, UpdateDay, Psdiv } from './style'

function Child_new(props) {

  const data = props.data.toJS()
  console.log('new', data)

  const refresh = props.refresh

  return (
    <div>
      {
        data.map(item => {
          return (
            <Thebox key={item.id}>
              <img
                  src={item.coverImgUrl}
                  width="100"
                  height="100"
                // onLoad={()=>{console.log('加载完啦')}}
                // onLoad={props.updateScroll}
                  onLoad={refresh}
              />
              <UpdateDay>{item.updateFrequency}</UpdateDay>
              <Psdiv>
                <div className="thepout">
                  {
                    item.tracks.map((ttem, t) => {
                      return (
                        <p key={ttem.first}>{t + 1}. {ttem.first} - {ttem.second}</p>
                      )
                    })
                  }
                </div>
              </Psdiv>
            </Thebox>
          )
        })
      }
    </div>
  )
}

export default React.memo(Child_new)

