import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  Container, ImgWrapper, CollectButton,
  SongListWrapper,
  SongListWrapper_par
} from './style'
import Header from '@/baseUI/header/index'
import CommonSongList from '@/application/CommonSongList' // 拆分几个小组件出来

import { connect } from 'react-redux'
import { getSingerInfo, changeEnterLoading } from './store/actionCreators'

import Scroll from '@/baseUI/scroll/index'

import Loading from './../../baseUI/loading/index'

function Singer(props) {
  // 处理进出动作
  const [showStatus, setShowStatus] = useState(true)
  const handleBack = () => {
    setShowStatus(false)
  }

  const {
    artist: immutableArtist,
    songs: immutableSongs,
    loading
  } = props
  const { getSingerDataDispatch } = props

  console.log('loading=', loading)

  const artist = immutableArtist ? immutableArtist.toJS() : []
  const songs = immutableSongs ? immutableSongs.toJS() : []

  console.log('artist', artist)
  console.log('songs', songs)

  React.useEffect(() => {
    const id = props.match.params.id
    console.log(id)
    // getSingerDataDispatch (id);
    getSingerDataDispatch(id)
  }, [])

  // 图片初始高度
  const imageWrapper = React.useRef() // 绑定在顶部图片组件上
  const collectButton = React.useRef() // 绑定在收藏按钮上
  const initialHeight = React.useRef(0) // 初始高度会记忆在initialHeight中
  // 往上偏移的尺寸，露出圆角
  // const OFFSET = 5
  React.useEffect(() => {
    let h = imageWrapper.current.offsetHeight
    console.log('h=', h)
    // songScrollWrapper.current.style.top = `${h - OFFSET} px`
    initialHeight.current = h
    // // 把遮罩先放在下面，以裹住歌曲列表
    // layer.current.style.top = `${h - OFFSET} px`
    // songScroll.current.refresh()
    // //eslint-disable-next-line
  }, [])

  const HEADER_HEIGHT = 270
  const header_height = 45
  const handleScroll = pos => { // 滚动事件
    // console.log('pos=',pos)
    // let height = initialHeight.current
    // console.log('initialHeight.current=', initialHeight.current)
    const newY = pos.y
    // const minScrollY = -(height - OFFSET) + HEADER_HEIGHT
    // console.log('minScrollY=',minScrollY)
    // // 指的是滑动距离占图片高度的百分比
    // const percent = Math.abs(newY /height)
    // console.log('percent=',percent)

    if (newY > 0) {
      // console.log('列表在往下拉，要放大顶部图片')
      let nification = (HEADER_HEIGHT + newY) / HEADER_HEIGHT
      // console.log('放大倍率=', nification)
      // console.log(imageWrapper.current)
      imageWrapper.current.style['transform'] = `scale(${nification})`
    } else if (-1 * newY <= (HEADER_HEIGHT - header_height)) {
      // console.log('列表向上，但还没到达header，慢慢计算，收藏按钮透明')
      let nification = ((HEADER_HEIGHT - header_height) + newY) / (HEADER_HEIGHT - header_height)
      // console.log('透明倍率=', nification)
      // console.log(collectButton.current)
      collectButton.current.style['opacity'] = nification
    } else {
      // console.log('列表向上到达了header的高度，设置到此的内容为隐藏')
      // 不需要动态设置，css中配置了到达顶层后超出隐藏
    }
  }

  return (
    <CSSTransition
        in={showStatus}
        timeout={300}
        classNames="fly"
        appear
        unmountOnExit
        onExited={() => props.history.goBack()}
    >
      <Container>
        {loading ? (<Loading></Loading>) : null}
        <Header
            title={artist.name}
            handleClick={handleBack}
        ></Header>
        <ImgWrapper bgUrl={artist.picUrl}
            ref={imageWrapper}
        >
          <div className="filter"></div>
        </ImgWrapper>
        <SongListWrapper_par>
          <SongListWrapper>
            <Scroll
                onScroll={handleScroll}
            >
              <div>
                <CollectButton ref={collectButton}>
                  <p className="text"><i className="iconfont">&#xe715;</i>收藏</p>
                </CollectButton>
                <CommonSongList
                    length={songs ? songs.length : 0}
                    list={songs || []}
                    opacity={1}
                />
              </div>
            </Scroll>
          </SongListWrapper>
        </SongListWrapper_par>
      </Container>
    </CSSTransition>
  )
}

// export default Singer
// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = state => ({
  artist: state.getIn(['singerInfo', 'artist']),
  songs: state.getIn(['singerInfo', 'songsOfArtist']),
  loading: state.getIn(['singerInfo', 'loading'])
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
  return {
    getSingerDataDispatch(id) {
      dispatch(changeEnterLoading(true))
      dispatch(getSingerInfo(id))
    }
  }
}

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singer))