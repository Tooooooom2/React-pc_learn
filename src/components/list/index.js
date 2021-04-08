import React from 'react'
import { getCount } from '@/api/utils'
import {
  ListWrapper,
  ListItem,
  List
} from './style'

function RecommendList (props) {

  console.log('传给RecommendList props=', props)

  return (
    <ListWrapper>
      <h1 className="title"> 推荐歌单 </h1>
      <List>
        {
          props.recommendList.map((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className="img_wrapper">
                    <img src={require(`@/assets/image/${item.picUrl}`).default}
                        width="100%"
                        height="100%"
                        alt="music"
                    />
                  <div className="play_count">
                    <i className="iconfont play">&#58961;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
  }

export default React.memo(RecommendList)