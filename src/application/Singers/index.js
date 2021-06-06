import React, { useMemo } from 'react'
import { categoryTypes, alphaTypes } from './testDatas' // 本地模拟数据
import { ListContainer } from './style' // 配置style的dom
import Horizen from '@/baseUI/horizen-item' // 顶部水平滚动的列表
import Scroll from '@/baseUI/scroll/index' // 滚动列组件
import { connect } from 'react-redux' // 增加和redux的连接
import * as actionTypes from './store/actionCreators' // 连接Recommend下的actionTypes
import Loading from '@/baseUI/loading' // 加入手写的loading覆盖组件
import RenderSingerList from './RenderSingerList' // 具体的歌手列表组件

import { forceCheck } from 'react-lazyload' // 懒加载的监听事件
import { debounce } from '@/api/utils' // 函数防抖

console.log('模拟数据 推荐列表 =', categoryTypes)
console.log('模拟数据 首字母 =', alphaTypes)

function Singers(props) {

  const {
    singerList,
    enterLoading,
    pullUpLoading,
    pullDownLoading,
    pageCount,
    hasMorePage
  } = props // redux的传值
  const {
    forProps_getHotSingerList,
    forProps_getSingerList,
    forProps_pullUpRefreshDispatch,
    forProps_pullDownRefreshDispatch
  } = props // redux的传方法

  // 只在首次render创建后跑一次，执行首次获取热门歌手列表的逻辑
  React.useEffect(() => {
    // console.log('首次获取热门歌手列表的逻辑只在render后执行一次')
    forProps_getHotSingerList()
  }, [])

  // 顶部 推荐列表的点击事件的响应回调函数
  function dothegetTypeSingers(cat, alp) {
    forProps_getSingerList(
      cat ? cat.split(',')[1] : -1,
      cat ? cat.split(',')[0] : -1,
      alp || null)
  }

  // 监听分类、首字母的点击事件，改变选中，刷新搜索分类歌手列表
  const [oldVal_category, setoldVal_category] = React.useState()
  const [oldVal_alpha, setoldVal_alpha] = React.useState()
  const handleClick_category = (val) => {
    console.log('监听点击, 分类，改变 oldVal_category=', val)
    setoldVal_category(val)
    dothegetTypeSingers(val, oldVal_alpha) // 执行，获取当前搜索分类歌手列表
  }
  const handleClick_alpha = (val) => {
    console.log('监听点击，首字母，改变 oldVal_alpha=', val)
    setoldVal_alpha(val)
    dothegetTypeSingers(oldVal_category, val) // 执行，获取当前搜索分类歌手列表
  }

  // 给scroll的上下拉的回调

  // 因为用户可能多次拉动，给上拉下拉加上一个函数防抖，
  // 为了确保每次引用的是那个函数闭包，而不是声明它的过程（防止闭包陷阱）,要加到useMemo中去声明
  const handlePullUp_before = () => { // 底部上拉继续加载
    console.log('底部上拉，继续刷新下一页内容')
    const cat = oldVal_category
    const alp = oldVal_alpha
    forProps_pullUpRefreshDispatch(
      cat ? cat.split(',')[1] : -1,
      cat ? cat.split(',')[0] : -1,
      alp || null,
      !(cat || alp), // 分类、首字母 有一个存在就展示分类歌手，而非热门歌手了
      pageCount
    )
  }
  const handlePullDown_before = () => { // 顶部下拉刷新
    console.log('顶部下拽，刷新整体内容')
    const cat = oldVal_category
    const alp = oldVal_alpha
    forProps_pullDownRefreshDispatch(
      cat ? cat.split(',')[1] : -1,
      cat ? cat.split(',')[0] : -1,
      alp || null,
      !(cat || alp) // 分类、首字母 有一个存在就展示分类歌手，而非热门歌手了
    )
  }
  // 注意，这里用的写法是每次render重绘，而不是限制它为[]，
  // 确实是个缺陷，想彻底保持首次运行的话应该加上[]的，但因为这里的防抖包裹的函数是会改变props导致重绘的
  // 这样子写就是在每一轮之间都重新声明了一次防抖函数，效果和[]的绝对独立也没差；
  // 总之规范的话，还是希望可以加上[]让它在整个周期中都保持独立；
  const handlePullUp = useMemo(()=>{
    // console.log('1111')
    return debounce(handlePullUp_before,1000)
  })
  const handlePullDown = useMemo(()=>{
    // console.log('2222')
    return debounce(handlePullDown_before,1000)
  })

  return (
    <div>
      <>
        <Horizen
            list={categoryTypes}
            title={'分类 (默认热门):'}
            oldVal={oldVal_category}
            handleClick={handleClick_category}
        ></Horizen>
        <Horizen
            list={alphaTypes}
            title={'首字母:'}
            oldVal={oldVal_alpha}
            handleClick={handleClick_alpha}
        ></Horizen>
      </>
      <ListContainer>
        {enterLoading ? <Loading /> : null}
        <Scroll
          // 只在依然保持有下一个分页的时候绑定底部上拽的继续刷新事件
            pullUp={hasMorePage ? handlePullUp : () => { console.log('已经到底啦') }}
          // 顶部下拽的更新事件可以一直存在
            pullDown={handlePullDown}

            pullUpLoading={pullUpLoading}
            pullDownLoading={pullDownLoading}

            onScroll={forceCheck} // 懒加载的监听事件
        >
          {/* 防止每次无关的props改变引起列表的重绘，直接传immutable格式的列表给子组件，在其内转换 */}
          <RenderSingerList list={singerList} />
        </Scroll>
      </ListContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  singerList: state.getIn(['singers', 'singerList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  pageCount: state.getIn(['singers', 'pageCount']),
  hasMorePage: state.getIn(['singers', 'hasMorePage'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    // 首次加载热门歌手列表
    forProps_getHotSingerList() {
      dispatch(actionTypes.getHotSingerList())
    },
    // 点击分类，展示各分类的歌手列表
    forProps_getSingerList(type, area, initial) {
      dispatch(actionTypes.changePageCount(0))                // 由于改变了分类，所以pageCount清零
      dispatch(actionTypes.changeEnterLoading(true))          // loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
      dispatch(actionTypes.getSingerList(type, area, initial)) // 执行获取分类下的列表
    },
    // 滑到最底部上拉刷新部分的处理
    forProps_pullUpRefreshDispatch(type, area, initial, hot, count) {
      dispatch(actionTypes.changePullUpLoading(true))                // 开启底部上拉的loading
      dispatch(actionTypes.changePageCount(count + 1))               // 页码数+1
      if (hot) {
        dispatch(actionTypes.refreshMoreHotSingerList())             // 当前是热门歌手，继续执行获取下一页
      } else {
        dispatch(actionTypes.refreshMoreSingerList(type, area, initial)) // 当前是分类歌手，继续执行获取下一页
      }
    },
    //顶部下拉刷新
    forProps_pullDownRefreshDispatch(type, area, initial, hot) {
      dispatch(actionTypes.changePullDownLoading(true))   // 开启顶部下拉的loading
      dispatch(actionTypes.changePageCount(0))            // pageCount回归0
      dispatch(actionTypes.changeHasMorePage(true))                   // hasMorePage回归true
      if (hot) {
        dispatch(actionTypes.getHotSingerList())
      } else {
        dispatch(actionTypes.getSingerList(type, area, initial))
      }
    }
  }
}

// export default React.memo(Singers)
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))