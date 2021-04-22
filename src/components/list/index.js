import React from 'react'
import { getCount } from '@/api/utils'
import {
  ListWrapper,
  ListItem,
  List
} from './style'

import LazyLoad from 'react-lazyload' // 懒加载组件

function RecommendList(props) {

  console.log('传给RecommendList recommendList=', props.recommendList)

  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          props.recommendList.map((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                  <LazyLoad
                      placeholder={<img src={require('@/assets/image/LocalImg.jpg').default}
                          width="120"
                          height="120"
                                   />}
                  >
                    <img
                      // src={require(`@/assets/image/${item.picUrl}`).default}
                        src={item.picUrl}
                        width="100%"
                        height="100%"
                        alt="music"
                    />
                  </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#58961;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name.substr(0, 20)}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper >
  )
}

export default React.memo(RecommendList)