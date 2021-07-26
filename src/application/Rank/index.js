import React, { useRef } from 'react'
import {
  TheSmallTitle,
  ScrollParent
} from './style'

import Child_new from './Child_new'
import Child_hot from './Child_hot'

import Scroll from '@/baseUI/scroll/index' // 滚动列组件

import { connect } from 'react-redux' // 增加和redux的连接
import * as actionTypes from './store/actionCreators' // 连接Recommend下的actionTypes

import Loading from '@/baseUI/loading' // 加入手写的loading覆盖组件
import { debounce } from '@/api/utils' // 防抖

function Rank(props) {
  // 组件常规，数据操作
  const { listNew, listHot, enterLoading } = props
  const { forpage_getlist } = props
  React.useEffect(() => {
    forpage_getlist()
  }, [])

  // 针对Scroll的refresh
  const scrollRef = useRef()
  console.log('scrollRef=', scrollRef)
  let refresh = scrollRef.current && debounce(scrollRef.current.refresh, 500)

  return (
    <ScrollParent>
      <Scroll ref={scrollRef}>
        <div>
          {enterLoading ? <Loading /> : null}
          <TheSmallTitle>新晋榜</TheSmallTitle>
          <Child_new
              data={listNew}
              refresh={refresh}
          ></Child_new>
          <TheSmallTitle>热门榜</TheSmallTitle>
          <Child_hot
              data={listHot}
              refresh={refresh}
          ></Child_hot>
        </div>
      </Scroll>
    </ScrollParent>
  )
}

const mapStateToProps = (state) => ({
  listNew: state.getIn(['rank', 'listNew']),
  listHot: state.getIn(['rank', 'listHot']),
  enterLoading: state.getIn(['rank', 'enterLoading'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    forpage_getlist() {
      dispatch(actionTypes.getRankList())
    }
  }
}

// export default React.memo(Rank)
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank))

