import React from 'react'
import Slider from '@/components/slider'
import RecommendList from '@/components/list'

import Scroll from '@/baseUI/scroll/index'
import {Content} from './style'

function Recommend() {

  //轮播列表
  const bannerList = [111, 222, 333].map(item => {
    return { imageUrl: item + '.jpg' }
  })

  //推荐歌单列表
  const nameList = [
    '朴树',
    '张杰',
    '张震岳',
    '古巨基',
    '潘玮柏',
    '李健',
    '陈楚生',
    '罗志祥',
    '陶喆',
    '游鸿明',
    '马天宇',
    '谭咏麟',
    '陈楚生',
    '罗志祥',
    '陶喆',
    '游鸿明',
    '马天宇',
    '谭咏麟'
  ]
  const recommendList = nameList.map((item,i) => {
    // console.log(Math.round(Math.random()*100000))
    return {
      id: i+1,
      picUrl: 'singer_'+(i+1)+'.jpg',
      playCount: Math.round(Math.random()*100000),
      name: nameList[i]
    }
  })

  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}

export default React.memo(Recommend)