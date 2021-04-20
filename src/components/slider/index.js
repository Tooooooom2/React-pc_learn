import React from 'react'

// 引入自定义的css组件
import { SliderContainer, RedDiv } from './style'

// swpier 6.x 版本 【 Swiper-React-Components 】
// 引入Swiper-React-Components核心模块(自动生效)
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

// Swiper-React-Components 其他模块的引入
import SwiperCore, { Pagination, Autoplay } from 'swiper'

// Swiper-React-Components 其他模块的使用
SwiperCore.use([Pagination, Autoplay])

function Slider(props) {
  const { bannerList } = props

  console.log('传给slider bannerList=', bannerList)

  // 这里加一个判断，因为数据是异步来的，当数据为空时不渲染内容
  // 因为如果传了[]给slider的话，轮播图会按[]初始化（猜测），后来传了新的完整数据也无法再正常拖动
  if (bannerList.length == 0) {
    return null
  }

  return (
    <Swiper
        onSlideChange={() => console.log('slide change')} // 切换slide触发
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={1} // slider容器同时显示的slide数量
        spaceBetween={0} // slide的间距
        autoplay={{
        delay: 5000, // 切换间隔
        stopOnLastSlide: false, // 到最后一个停止
        disableOnInteraction: false // 用户操作过后是否中止autoplay
      }}
    //   pagination={{
    //   el: '.swiper-pagination',
    //   type: 'progressbar' // 进度条模式需要在el样式中设置高度
    // }}
    >
      {/* RedDiv 模拟的红色背景 */}
      <RedDiv />
      {
        bannerList.map((slider, i) => {
          return (
            // 这里要修改key，否则多个用同一个图片的话会报错key重复
            <SwiperSlide key={slider.imageUrl + '_' + i}>
              <SliderContainer>
                <div className="ImgDiv">
                  <img alt="推荐"
                      className="theImg"
                      height="100%"
                    // src={require('@/assets/image/' + slider.imageUrl).default}
                      src={slider.imageUrl}
                    // src={require('@/assets/image/111.jpg').default}
                    // src={'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg'}
                      width="100%"
                  />
                </div>
                <div className="swiper-pagination"></div>
              </SliderContainer>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default React.memo(Slider)