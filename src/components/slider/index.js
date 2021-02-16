// swpier 6.x 版本的写法
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
// 自定义的css组件
import { SliderContainer,RedDiv } from './style';

function Slider(props) {
  const { bannerList } = props
  return (
    <Swiper
      spaceBetween={0} // slide的间距
      slidesPerView={1} // slider容器同时显示的slide数量
      onSlideChange={() => console.log('slide change')} // 切换slide触发
      onSwiper={(swiper) => console.log(swiper)}
    >
      <RedDiv />
      {
        bannerList.map((slider, i) => {
          return (
            // 这里要修改key，否则多个用同一个图片的话会报错key重复
            <SwiperSlide key={slider.imageUrl + '_' + i}>
              <SliderContainer>
                <div className="ImgDiv">
                  <img className='theImg' src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                </div>
              </SliderContainer>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}

export default React.memo(Slider);