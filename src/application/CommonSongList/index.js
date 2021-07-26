import React from 'react'
import { SongList, SongItem } from './style'
import { getCount, getName } from '@/api/utils'

function Small_list(props) {

  const {  length,isShowFavorites,isShowFavorites_length,list , opacity } = props

  return (
    <SongList style={{opacity:opacity || 0.98}}>
      <div className="first_line">
        <div className="play_all">
          <i className="iconfont">&#xe676;</i>
          <span > 播放全部 <span className="sum">(共 {length} 首)</span></span>
        </div>
        {isShowFavorites && (
          <div className="add_list">
          <i className="iconfont">&#xe62d;</i>
          <span > 收藏 ({getCount(isShowFavorites_length)})</span>
        </div>
        )}
      </div>
      <SongItem>
        {
          list.map((item, index) => {
            return (
              <li key={index}>
                <span className="index">{index + 1}</span>
                <div className="info">
                  <span>{item.name}</span>
                  <span>
                    {getName(item.ar)} - {item.al.name}
                  </span>
                </div>
              </li>
            )
          })
        }
      </SongItem>
    </SongList>
  )
}

export default React.memo(Small_list)