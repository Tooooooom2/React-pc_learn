import React from 'react'
import { List, ListItem } from './style' // 配置style的dom

import LazyLoad from 'react-lazyload' // 懒加载组件

// 渲染函数，返回歌手列表
function RenderSingerList(props) {

  // 歌手列表
  // 注意，此时还是一个immutable，要转回来使用
  let list = props.list.toJS()

  console.log('[RenderSingerList] 用于渲染歌手列表的list=', list)
  return (
    <List>
      {
        list.map((item) => {
          return (
            <ListItem key={item.id}>
              <div
                  className="img_wrapper"
              >
                <LazyLoad
                    placeholder={<img src={require('@/assets/image/LocalImg.jpg').default}
                        width="50"
                        height="50"
                                 />}
                >
                  <img
                      src={`${item.picUrl}?param=50x50`}
                      onError={(e) => { e.target.src = require('@/assets/image/LocalImg.jpg').default }}
                      alt="music"
                  />
                </LazyLoad>
              </div>
              <span className="name">{item.name}{item.alias[0] && ` [${item.alias[0]}]`}</span>
            </ListItem>
          )
        })
      }
    </List>
  )
}

export default React.memo(RenderSingerList)