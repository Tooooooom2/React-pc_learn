import React from 'react'

import Slider from '@/components/slider' // 轮播图
import RecommendList from '@/components/list' // 推荐列表

import Scroll from '@/baseUI/scroll/index' // 移动端滑动组件
import { Content, RedDiv, WhiteBackground } from './style' // 移动端滑动组件的style-dom

import { connect } from 'react-redux' // 增加和redux的连接
import * as actionTypes from './store/actionCreators' // 连接Recommend下的actionTypes

import store from '@/store/index'

function Recommend(props) {

  console.log('传给Recommend的props=', props)
  const { bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props

  React.useEffect(() => {
    console.log('要跑啦~~~~~~')
    getBannerDataDispatch()
    getRecommendListDataDispatch()
    //eslint-disable-next-line
  }, []);

  console.log(bannerList)
  console.log(recommendList)

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []

  console.log('计算的bannerListJS=', bannerListJS)
  console.log('r计算的ecommendListJS=', recommendListJS)

  return (
    // Content 外包裹，给Scroll固定的父dom
    <Content>
      {/* RedDiv 轮播图的红色背景边 */}
      <RedDiv />
      <Scroll>
        {/* WhiteBackground 给Scroll拖动时保持的白底色 */}
        <WhiteBackground>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </WhiteBackground>
      </Scroll>
    </Content>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
// （将 store 中的数据作为 props 绑定到组件上）
// 此时state的形式还是immutable，不是普通对象
const mapStateToProps = (state) => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})

// 映射redux的dispatch方法，return值会赋值到props上
const mapDispatchToProps = (dispatch) => {
  console.log('dispatch=', dispatch)
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}

console.log('此时state的形式还是immutable，要具体查看可以转回js检查')
console.log('~~~~store=', store)
console.log('~~~~state=', store.getState())
console.log('~~~~state转回js=', store.getState().toJS())

// export default React.memo(Recommend)

// 将 ui 组件包装成容器组件
// 这里可以理解为，用redux的connect方法，对Recommend组件执行了上面声明的mapStateToProps、mapDispatchToProps两个方法；
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))

  // //轮播列表-模拟数据
  // const bannerList = [111, 222, 333].map(item => {
  //   return { imageUrl: item + '.jpg' }
  // })

  // //推荐歌单列表-模拟数据
  // const nameList = [
  //   '朴树',
  //   '张杰',
  //   '张震岳',
  //   '古巨基',
  //   '潘玮柏',
  //   '李健',
  //   '陈楚生',
  //   '罗志祥',
  //   '陶喆',
  //   '游鸿明',
  //   '马天宇',
  //   '谭咏麟',
  //   '陈楚生',
  //   '罗志祥',
  //   '陶喆',
  //   '游鸿明',
  //   '马天宇',
  //   '谭咏麟'
  // ]

  // // 歌手图片-模拟数据
  // const recommendList = nameList.map((item, i) => {
  //   // console.log(Math.round(Math.random()*100000))
  //   return {
  //     id: i + 1,
  //     picUrl: 'singer_' + (i + 1) + '.jpg',
  //     playCount: Math.round(Math.random() * 100000),
  //     name: nameList[i]
  //   }
  // })