import React, { useState } from 'react'
import { Container } from './style'
import { CSSTransition } from 'react-transition-group'
import Header from '@/baseUI/header/index'
import Scroll from '@/baseUI/scroll/index'

import style from '../../assets/global-style'

import { isEmptyObject } from '@/api/utils'

import { connect } from 'react-redux' // 增加和redux的连接
import * as actionTypes from './store/actionCreators' // 连接Recommend下的actionTypes

import Loading from '@/baseUI/loading' // 加入手写的loading覆盖组件

import Small_top from './Small_top' // 拆分几个小组件出来
import Small_menu from './Small_menu' // 拆分几个小组件出来
import CommonSongList from '@/application/CommonSongList' // 拆分几个小组件出来

function Album(props) {
  console.log('Album', props)
  const id = props.match.params.id // 进入页面带进的id
  console.log('id=', id)

  // 处理 根据id获取内容数据
  const { currentAlbum: currentAlbumImmutable, enterLoading } = props
  const { for_page_getlist } = props
  console.log(currentAlbumImmutable, enterLoading)
  React.useEffect(() => {
    for_page_getlist(id)
  }, [for_page_getlist, id])
  let currentAlbum = currentAlbumImmutable.toJS()
  console.log(currentAlbum)

  // 处理 进出动作
  const [showStatus, setShowStatus] = useState(true) // bool 触发 CSSTransition 的进出动作
  const handleBack = () => {
    setShowStatus(false)
  }

  // 处理 滑动 顶部内容变色
  // 逻辑，header的回退图标，点击事件触发handleBack，改变了showStatus为false，
  // in为false，CSSTransition退出，退出完成后触发onExited，开始路由跳转，
  // 确保动画完整展示之后跳转路由，否则直接切路由，本页面组件销毁，动画效果也没了
  const [title, setTitle] = useState('歌单')
  const [isMarquee, setIsMarquee] = useState(false)// 是否跑马灯
  const headerEl = React.useRef()
  const handleScroll = (pos) => {
    // console.log('pos=',pos)
    let minScrollY = -45
    let percent = Math.abs(pos.y / minScrollY)
    // console.log('percent=',percent)
    let headerDom = headerEl.current
    // 滑过顶部的高度开始变化
    if (pos.y < minScrollY) {
      headerDom.style.backgroundColor = style['theme-color']
      headerDom.style.opacity = Math.min(1, (percent - 1) / 2)
      // console.log('Math.min(1, (percent-1)/2)',Math.min(1, (percent-1)/2))
      setTitle(currentAlbum.name)
      setIsMarquee(true)
    } else {
      headerDom.style.backgroundColor = ''
      headerDom.style.opacity = 1
      setTitle('歌单')
      setIsMarquee(false)
    }
  }

  console.log(isEmptyObject(currentAlbum))
  console.log('~~~~~',currentAlbum)

  return (
    <CSSTransition
        in={showStatus}
        timeout={300}
        classNames="fly"
        appear
        unmountOnExit
        onExited={props.history.goBack}
    >
      <Container>
        {enterLoading ? <Loading /> : null}
        <Header
            ref={headerEl}
            title={title}
            handleClick={handleBack}
            isMarquee={isMarquee}
        ></Header>
        {!isEmptyObject(currentAlbum) && (
          <Scroll
              bounceTop={false}
              onScroll={handleScroll}
          >
            <div>
              <Small_top currentAlbum={currentAlbum} />
              <Small_menu />
              <CommonSongList
                  length={currentAlbum.tracks.length}
                  isShowFavorites
                  isShowFavorites_length={currentAlbum.subscribedCount}
                  list={currentAlbum.tracks}
              />
            </div>
          </Scroll>
        )}
      </Container>
    </CSSTransition>
  )
}

// export default React.memo(Album)

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = (state) => ({
  currentAlbum: state.getIn(['album', 'currentAlbum']),
  enterLoading: state.getIn(['album', 'enterLoading'])
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    for_page_getlist(id) {
      dispatch(actionTypes.changeEnterLoading(true)) // 启动loading
      dispatch(actionTypes.getAlbumList(id)) // 开始获取列表
    }
  }
}

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album))