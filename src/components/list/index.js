import React from 'react'
import { getCount } from '@/api/utils'
import {
  ListWrapper,
  ListItem,
  List
} from './style'

import { withRouter } from 'react-router-dom'

import LazyLoad from 'react-lazyload' // 懒加载组件

function dothejump(item, props) {
  console.log('jump', item, props)
  props.history.push(`/home/recommend/${item.id}`)
}

function RecommendList(props) {

  console.log(props)
  console.log('传给RecommendList recommendList=', props.recommendList)

  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          props.recommendList.map((item, index) => {
            return (
              <ListItem key={item.id + index}
                  onClick={() => { dothejump(item, props) }}
              >
                <div className="img_wrapper">
                  <LazyLoad
                      placeholder={<img src={require('@/assets/image/LocalImg.jpg').default}
                          width="120"
                          height="120"
                                   />}
                  >
                    <img
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

export default React.memo(withRouter(RecommendList))